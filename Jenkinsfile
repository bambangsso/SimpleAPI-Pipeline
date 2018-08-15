pipeline {
  agent any
    
  tools {nodejs "NodeJS 10.8.0"}
    
  stages {
        
    stage('Mulia Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Mulai Test') {
      steps {
         sh 'npm test'
      }
    }

    stage('Mulai Deploy ke Staging') {
      steps {
         sh 'ssh jenkins@10.140.0.3 "rm -fR SimpleAPI-Pipeline && mkdir SimpleAPI-Pipeline"'
	 sh 'scp -r . jenkins@10.140.0.3:/home/jenkins/SimpleAPI-Pipeline'
         sh 'jenkins@10.140.0.3 "sleep 10 && cd SimpleAPI-Pipeline && ls -la && pm2 start index.js && sleep 1 && exit"'
      }
    }
      
  }
}