pipeline {
    agent any

    stages {
        stage('test') {
             steps {
                 echo 'Hello World'
                 timeout(time: 2, unit: 'MINUTES'){
                    retry(1){
                        sh 'npm test'
                    }
                 }
             }
        }
    }

    post{
        always {
            echo 'Waiting to attach test report to piepline'
            archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
        }
        failure {
            echo 'Waiting to send email when fails'
        }
    }
}
