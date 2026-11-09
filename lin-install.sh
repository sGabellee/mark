#!/usr/bin/env bash

# Imposta variabili per i percorsi
DIST_DIR="$PWD/dist/linux-unpacked"
APPIMAGE_PATH="$DIST_DIR/mark"
INSTALL_DIR="/opt/mark"
DESKTOP_FILE="$HOME/.local/share/applications/Mark.desktop"
BIN_DIR="/usr/local/bin"

# Copia l'icona nella directory delle icone locali e nei temi standard XDG
ICON_SOURCE="$PWD/build/mark.png"
ICON_DEST="$HOME/.local/share/icons/mark.png"
mkdir -p "$HOME/.local/share/icons"
mkdir -p "$HOME/.local/share/icons/hicolor/512x512/apps"
mkdir -p "$HOME/.local/share/icons/hicolor/256x256/apps"
mkdir -p "$HOME/.local/share/icons/hicolor/scalable/apps"
mkdir -p "$HOME/.local/share/pixmaps"

cp "$ICON_SOURCE" "$ICON_DEST"
cp "$ICON_SOURCE" "$HOME/.local/share/icons/hicolor/512x512/apps/mark.png"
cp "$ICON_SOURCE" "$HOME/.local/share/icons/hicolor/256x256/apps/mark.png"
cp "$ICON_SOURCE" "$HOME/.local/share/icons/hicolor/scalable/apps/mark.png"
cp "$ICON_SOURCE" "$HOME/.local/share/pixmaps/mark.png"

# Funzione per barra di avanzamento testuale
progress_bar() {
  local progress=$1
  local total=$2
  local width=40
  local percent=$((progress * 100 / total))
  local filled=$((progress * width / total))
  local empty=$((width - filled))
  printf "["
  for ((i=0; i<filled; i++)); do printf "#"; done
  for ((i=0; i<empty; i++)); do printf "-"; done
  printf "] %d%%\r" "$percent"
}

steps=("Installazione dipendenze" "Build progetto" "Copia file" "Compilazione mark.c" "Installazione completata")
total=${#steps[@]}

clear

# Richiedi credenziali sudo all'inizio
sudo -v || { echo "Permessi sudo richiesti."; exit 1; }

for i in "${!steps[@]}"; do
  step=${steps[$i]}
  echo "$step..."
  progress_bar $((i+1)) $total
  case $step in
    "Installazione dipendenze")
      if ! npm install; then
        echo "Errore durante l'installazione delle dipendenze (npm install)!"
        exit 1
      fi
      ;;
    "Build progetto")
      # Pulisce la vecchia cartella dist che potrebbe essere appartenuta a root
      sudo rm -rf "$PWD/dist"
      # Se la build completa fallisce, prova la build unpacked
      if ! npm run build; then
        echo "Build standard fallita, riprovo con electron-builder --dir..."
        sudo rm -rf "$PWD/dist"
        if ! npx electron-builder --dir; then
          echo "Errore critico durante la build del progetto!"
          exit 1
        fi
      fi
      ;;
    "Copia file")
      if [ ! -d "$DIST_DIR" ]; then
        echo "Errore: cartella $DIST_DIR non trovata dopo la build!"
        exit 1
      fi
      sudo mkdir -p "$INSTALL_DIR"
      sudo rm -rf "$INSTALL_DIR"/*
      sudo cp -r "$DIST_DIR"/* "$INSTALL_DIR/"
      sudo chown root:root "$INSTALL_DIR/chrome-sandbox"
      sudo chmod 4755 "$INSTALL_DIR/chrome-sandbox"
      # Se il binario generato si chiama Mark (maiuscolo), crea symlink a mark (minuscolo)
      if [ -f "$INSTALL_DIR/Mark" ] && [ ! -f "$INSTALL_DIR/mark" ]; then
        sudo ln -sf "$INSTALL_DIR/Mark" "$INSTALL_DIR/mark"
      fi
      sudo chmod +x "$INSTALL_DIR/mark" 2>/dev/null || true
      [ -f "$INSTALL_DIR/Mark" ] && sudo chmod +x "$INSTALL_DIR/Mark" 2>/dev/null || true
      ;;
    "Compilazione mark.c")
      if gcc -O2 -o mark mark.c; then
        sudo cp mark "$BIN_DIR/mark"
        sudo chmod +x "$BIN_DIR/mark"
      else
        echo "Avviso: compilazione mark.c fallita. Creazione script wrapper di avvio..."
        sudo tee "$BIN_DIR/mark" > /dev/null << 'EOF'
#!/usr/bin/env bash
nohup /opt/mark/mark "$@" >/dev/null 2>&1 &
EOF
        sudo chmod +x "$BIN_DIR/mark"
      fi
      ;;
    "Installazione completata")
      echo "Mark è stato installato correttamente!"
      ;;
  esac
  sleep 0.5
  echo ""
done

cat <<EOF > "$DESKTOP_FILE"
[Desktop Entry]
Version=1.0
Name=Mark
GenericName=Markdown Editor
Comment=Mark Markdown Editor
Exec=$INSTALL_DIR/mark %U
Icon=mark
Terminal=false
Type=Application
Categories=Utility;TextEditor;Development;
MimeType=text/markdown;text/x-markdown;
StartupWMClass=mark
StartupNotify=true
Keywords=markdown;editor;notes;latex;katex;
EOF
chmod +x "$DESKTOP_FILE"

# Rimuove eventuale vecchio symlink duplicato se presente
rm -f "$HOME/.local/share/applications/mark.desktop"

update-desktop-database "$HOME/.local/share/applications/" 2>/dev/null || true
gtk-update-icon-cache -f -t "$HOME/.local/share/icons/hicolor" 2>/dev/null || true

echo "Puoi trovare Mark nel menu applicazioni o eseguirlo da terminale con 'mark' o 'mark nomefile.md'"
