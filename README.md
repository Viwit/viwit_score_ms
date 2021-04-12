# Building the image
```docker build -t viwit-score .```

# Running the image
``` docker run -p 3000:3000 -d viwit-score ```

## Important Reminder 
``` For deploying the app, the package.json script <<start>> has to be changed from nodemon to node```
