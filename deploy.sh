
cd next-app-cicd-prac
git pull origin main
npm install
npm run build
nohup npm run start > app.log 2>&1 &