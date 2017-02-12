sh build.sh
cd dist
zip -r -D metadata-repo.zip *
curl -X POST -u developer:DEVELOPER2016 -F file=@metadata-repo.zip http://41.217.202.50:8080/api/apps
