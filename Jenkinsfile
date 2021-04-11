pipeline {
  agent any

  tools {nodejs 'nodejs'}

  stages {
    stage('Install node modules') {

      when {
        expression {
          GIT_BRANCH != 'origin/dev' //&& CODE_CHANGES == true
        }
      }

      steps {
        echo "Node modules for ${GIT_BRANCH} getting installed"

        sh 'npm install'
        sh 'npm audit fix'

        dir('menntec') {
          sh 'npm install'
          sh 'npm audit fix'
        }
      }
    }

    stage('Build Menntec Application') {
      steps {

        dir('menntec') {
          script {
              if (GIT_BRANCH == 'origin/stage'){
                  echo 'Stage Branch'
                  sh 'npm run build'
              }
              else if (GIT_BRANCH == 'origin/dev'){
                  echo 'Dev Branch' 
              }
              else {
                  echo 'Production Build'
                  sh 'npm run build --prod'
              }
          }
        }        
        
      }
    }

    stage('Deploy Application') {
      steps {

        script {
              if (GIT_BRANCH == 'origin/stage'){
                echo 'Deploy to Staging'
                ftpPublisher  alwaysPublishFromMaster: true,
                      continueOnError: false,
                      failOnError: false,
                      masterNodeName: '',
                      paramPublish: null,
                      publishers: [[configName: 'menntec_stage', transfers: [[asciiMode: false, cleanRemote: true, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'menntec/dist/menntec', sourceFiles: 'menntec/dist/*,menntec/dist/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]
              }
              else if (GIT_BRANCH == 'origin/dev'){
                echo 'No Deployment (Dev)' 
              }
              else {
                echo 'Deploy to Live'
                ftpPublisher  alwaysPublishFromMaster: true,
                      continueOnError: false,
                      failOnError: false,
                      masterNodeName: '',
                      paramPublish: null,
                      publishers: [[configName: 'menntec_live', transfers: [[asciiMode: false, cleanRemote: true, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'menntec/dist/menntec', sourceFiles: 'menntec/dist/*,menntec/dist/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]
              }
          }

        }
    }
  } 

  post {
    always {
      cleanWs()
    }
    success {
      echo 'I succeeded!'
    }
    failure {
      echo 'I failed!'
    }
  }
}
