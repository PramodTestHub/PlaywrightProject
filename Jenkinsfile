pipeline {
    agent any

    tools {
        nodejs "NodeJS_20"  // configure this in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-repo/playwright-ts.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'   // clean install (faster than npm install)
            }
        }

        stage('Build TypeScript') {
            steps {
                sh 'npx tsc'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npx playwright show-report'
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
