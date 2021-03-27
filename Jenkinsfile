pipeline {
  agent any

  tools {nodejs 'nodejs'}

  stages {
    stage('Install node modules') {

      when {
        expression {
          GIT_BRANCH == 'origin/stage' //&& CODE_CHANGES == true
        }
      }

      steps {
        echo "Node modules for ${GIT_BRANCH} getting installed"
        sh 'npm install'
        sh 'npm audit fix'
      }
    }

    stage('Build Menntec Application') {
      steps {
        script {
            if (GIT_BRANCH == 'origin/stage'){
                echo 'Stage Branch'
            }
            else if (foo == 'origin/dev'){
                echo 'Dev Branch' 
            }
            else {
                echo 'Main Branch'
            }
        }
        
        //sh 'npm run build --prod'
      }
    }

    stage('Deploy Application') {
      steps {
        ftpPublisher  alwaysPublishFromMaster: true,
                      continueOnError: false,
                      failOnError: false,
                      masterNodeName: '',
                      paramPublish: null,
                      publishers: [[configName: 'menntec_stage', transfers: [[asciiMode: false, cleanRemote: true, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'dist/eudenbachNew', sourceFiles: 'dist/*,dist/**/*']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]

      }
    }
  }

  post {
    success {
      echo 'I succeeded!'
    }
    failure {
      echo 'I failed!'
    }
  }
}
