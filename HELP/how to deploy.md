# How to deploy

## Create milestone
1. https://git.matador.ais.co.th/groups/vhlinventory/-/milestones
2. create milestone

## Approve merge request
1. https://git.matador.ais.co.th/groups/vhlinventory/-/milestones
2. choose merge request task
3. click approve
4. ...check code
5. click merge

## Prepare deploy on code
1. `git checkout master`
2. `git checkout -b release-1.0.0-yyyymmdd`
3. open package.json and change version: `release-1.0.0-yyyymmdd`
4. `git commit -am "update version"; git push`

## Prepare deploy on web
1. go to repository > branch 
2. choose branch
3. click merge request > Assign to me > choose milestone > Create merge request
4. ...check code
5. click approve > merge
6. ...wait 1-2 minute
7. go to project overview > releases
8. download file at 'other'

## Deploy nexus
1. go to teleport
2. open git on teleport
3. go to project overview > releases
4. download file at 'other'
5. go to nexus ....
6. upload file


## Info
[URL Screen](https://github.com/thid2893/surtr-readme/blob/main/README.md)
[Deploy Document](https://drive.google.com/drive/folders/1zISOan7xXCo6KRisjoLCSLyFcaS5-5BR?usp=sharing)
