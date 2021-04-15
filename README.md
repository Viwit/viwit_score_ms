# Building the image
```docker build -t viwit-score .```

# Running the image
``` docker run -p 8000:8000 -d viwit-score ```

## Important Reminder 
``` For deploying the app, the package.json script <<start>> has to be changed from nodemon to node```
