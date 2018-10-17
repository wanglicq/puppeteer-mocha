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
            publishHTML(target:
                    [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: false,
                        reportDir: 'mochawesome-report',
                        reportFiles: 'mochawesome.html',
                        reportName: 'HTML Report',
                        reportTitles: ''
                    ]
                )
            archiveArtifacts artifacts: './*.jar', fingerprint: true
        }
        failure {
            echo 'Waiting to send email when fails'
        }
    }
}
