# Book Backend API

A Node.js backend application with MongoDB for book management, configured for automatic deployment.

## Features

- ✅ Express.js REST API
- ✅ MongoDB database connection
- ✅ CORS enabled
- ✅ Environment variable configuration
- ✅ Health check endpoint
- ✅ Automatic deployment ready
- ✅ Graceful shutdown handling
- ✅ Multiple deployment platform support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akhtiar11/book_backend.git
   cd book_backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bookdb
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or for production mode:
   ```bash
   npm start
   ```

5. **Test the API**
   - Open browser: http://localhost:5000
   - Health check: http://localhost:5000/health

## Deployment Options

### Option 1: Heroku

1. **Install Heroku CLI** and login:
   ```bash
   heroku login
   ```

2. **Create a new Heroku app**:
   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables**:
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-atlas-uri"
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

The app will **automatically start** using the `npm start` command defined in `package.json`.

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set environment variables** in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: production

The `vercel.json` configuration ensures automatic deployment.

### Option 3: Railway

1. **Connect your GitHub repository** to Railway
2. **Set environment variables** in Railway dashboard:
   - `MONGODB_URI`
   - `PORT` (Railway auto-assigns, but you can override)
   - `NODE_ENV=production`
3. **Deploy** - Railway automatically detects Node.js and runs `npm start`

### Option 4: Render

1. **Create a new Web Service** on Render
2. **Connect your repository**
3. **Configure**:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Set environment variables**:
   - `MONGODB_URI`
   - `NODE_ENV=production`

### Option 5: DigitalOcean/AWS/VPS with PM2

1. **SSH into your server**
2. **Clone and setup**:
   ```bash
   git clone https://github.com/Akhtiar11/book_backend.git
   cd book_backend
   npm install
   npm install -g pm2
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with production values
   ```

4. **Start with PM2**:
   ```bash
   pm2 start ecosystem.config.js --env production
   pm2 save
   pm2 startup
   ```

PM2 will automatically restart the app on crashes and server reboots.

## MongoDB Setup

### Local MongoDB
Install MongoDB locally or use Docker:
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### MongoDB Atlas (Cloud - Recommended for Deployment)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string from "Connect" button
4. Replace `<username>`, `<password>`, and database name
5. Add your deployment platform's IP to whitelist (or use 0.0.0.0/0 for all IPs)

Example connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/bookdb?retryWrites=true&w=majority
```

## API Endpoints

- `GET /` - API status
- `GET /health` - Health check with MongoDB connection status

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/bookdb |
| NODE_ENV | Environment (development/production) | development |

## Project Structure

```
book_backend/
├── server.js           # Main application file
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
├── .gitignore         # Git ignore rules
├── Procfile           # Heroku deployment config
├── vercel.json        # Vercel deployment config
├── ecosystem.config.js # PM2 deployment config
└── README.md          # This file
```

## Automatic Startup on Deployment

The application is configured to start automatically when deployed:

- **npm start**: Defined in `package.json` as `"start": "node server.js"`
- **Procfile**: For Heroku (`web: node server.js`)
- **vercel.json**: For Vercel deployments
- **ecosystem.config.js**: For PM2 process management

All major platforms (Heroku, Vercel, Railway, Render) detect Node.js apps and automatically run `npm start` after deployment.

## Troubleshooting

### MongoDB Connection Issues
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas IP whitelist
- Ensure database user has proper permissions

### Port Issues
- Most cloud platforms automatically assign PORT via environment variable
- Don't hardcode port - use `process.env.PORT`

### Deployment Not Starting
- Check platform logs
- Verify `package.json` has correct `start` script
- Ensure all dependencies are in `dependencies` not `devDependencies`

## License

ISC