#!/usr/bin/env bash
ng build --prod
mv dist/assets/manifest.webapp dist/
sudo rm -r /home/dhis/config/apps/metadata-repo/
sudo mkdir /home/dhis/config/apps/metadata-repo
sudo chmod 777 -R /home/dhis/config/apps/metadata-repo/
cp -r dist/* /home/dhis/config/apps/metadata-repo/
