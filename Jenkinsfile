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
<<<<<<< HEAD

      steps {
        echo "Node modules for ${GIT_BRANCH} getting installed"
        sh 'cd menntec'
=======
      
      steps {
        echo "Node modules for ${GIT_BRANCH} getting installed"
>>>>>>> 75b240f270087933793de34154a0e38b2f0114cd
        sh 'npm install'
        sh 'npm audit fix'
      }
    }

    stage('Build Menntec Application') {
      steps {
        script {
            if (GIT_BRANCH == 'origin/stage'){
                echo 'Stage Branch'
<<<<<<< HEAD
                sh 'ls'
=======
>>>>>>> 75b240f270087933793de34154a0e38b2f0114cd
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
