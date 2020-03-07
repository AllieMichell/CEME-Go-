pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Run build'
        bat 'dir'
        bat 'npm install'
        bat 'npm run build'
        bat 'dir'
      }
    }
    stage('Stop Services') {
      steps {
        echo 'Stop services'
      }
    }
  }
  environment {
    serverIP = 'localhost'
    remotePath = 'C:\\Users\\USUARIO\\Desktop\\Hackathon\\Find-eat'
    remoteFolder = 'buckler'
    appName = 'buckler'
    serverKeyId = '313afa32-47dc-4a1e-99ba-9f0901379bdf'
    startFile = 'src/server/bin/www'
    serverUsername = 'windows'
  }
}