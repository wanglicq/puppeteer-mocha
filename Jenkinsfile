pipeline {
    agent { docker { image 'node:8.11' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}