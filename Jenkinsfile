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
            archiveArtifacts artifacts: 'package.json'
            publishHTML(target:
                    [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'mochawesome-report', //图片要放在这个文件夹中，publish到jenkins pipeline的时候才找得到
                        reportFiles: 'mochawesome.html',
                        reportName: 'HTML Report',
                        reportTitles: ''
                    ]
                )
        }
        failure {
            echo 'Waiting to send email when fails'
        }
    }
}
