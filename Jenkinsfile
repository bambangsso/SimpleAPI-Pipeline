pipeline {
  agent any
    
  tools {nodejs "NodeJS 10.8.0"}
    
  stages {
        
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}