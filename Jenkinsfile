pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('install dependency') {
            steps {
                echo 'Hello World'
                sh 'npm install'
            }
        }

        stage('test') {
             steps {
                 sh 'npm test'
             }
        }
    }
}
