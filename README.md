# Building the image
```docker build -t viwit-score .```

# Running the image
``` docker run -p 8000:8000 -d viwit-score ```

## Important Reminder 
``` For deploying the app, the package.json script <<start>> has to be changed from nodemon to node```

### Entity Consistency
#### The entity model is made in a form so an "unlimited" entity kinds can be added in the future of the app
For now, the entities kind parameter must be used in this form:
1. Driver
2. Bus
3. Route
