pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('test') {
             steps {
                 echo 'Hello World'
                 sh 'npm test'
             }
        }
    }
}
