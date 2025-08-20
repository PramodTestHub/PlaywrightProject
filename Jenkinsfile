pipeline {
    agent any

    tools {
        nodejs "NodeJS_20"  
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/PramodTestHub/PlaywrightProject'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'   
            }
        }

        stage('Build TypeScript') {
            steps {
                bat 'npx tsc'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                bat 'npx playwright show-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            junit '**/test-results/*.xml'  // If junit reporter is enabled
        }
    }
}
