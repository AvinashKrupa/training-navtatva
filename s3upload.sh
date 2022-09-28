#/bin/bash
aws s3 sync /var/lib/jenkins/workspace/training/out/ s3://training.navtatva
