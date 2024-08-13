pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jaydeep123s/DEVOPS-WEB-APP.git', credentialsId: 'github-pat'
            }
        }
        // other stages...
    }
}
