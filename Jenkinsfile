pipeline {
    agent { label 'win10-1' }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                //sh 'npm install'
                input message: 'step Build'
            }
        }
        stage('Test') {
            steps {
                //sh './jenkins/scripts/test.sh'
                input message: 'step Test'
            }
        }
        stage('Deliver') {
            steps {
               // sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
               // sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
