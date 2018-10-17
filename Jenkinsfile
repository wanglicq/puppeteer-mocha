pipeline {
    agent any

    stages {
        stage('test') {
             steps {
                 echo 'Hello World'
                 timeout(time: 2, unit: 'MINUTES'){
                    retry(1){
                        sh 'npm run parallelTest'
                    }
                 }
             }
        }
    }

    post{
        always {
            echo 'Waiting to attach test report to piepline'
            archiveArtifacts artifacts: 'mochawesome-report/**/*' //路径不用点斜杠
            publishHTML(target:
                    [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'mochawesome-report', //要显示在html中的图片要在这个文件夹中，publish到jenkins pipeline的时候才找得到, 然后才能显示出来
                        reportFiles: 'mochawesome.html',
                        reportName: 'HTML Report',
                        reportTitles: ''
                    ]
                )
            //deleteDir() /*clean up workspace*/
            echo 'waiting to store screenshot in output, then move to mochawesome-report'
        }
        failure {
            mail to: 'bananatestsun@gmail.com',
                 subject: "failed pipeline: ${currentBuild.fullDisplayName}",
                 body: "something is wrong with ${env.BUILD_URL}"
        }
    }
}
