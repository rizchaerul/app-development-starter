cd Backend
cd WebService
dotnet publish --configuration Release
cd bin
cd Release
cd net6.0

cd ..
cd ..
cd ..
cd ..
cd ..

cd Frontend
npm run build

cd ..

npx concurrently "cd Backend/WebService/bin/Release/net6.0 && dotnet WebService.dll" "cd Frontend && npm run start"