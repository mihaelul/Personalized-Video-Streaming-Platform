# Personalized Video Streaming Platform

A full-stack video publishing and streaming platform featuring intelligent popularity prediction, seamless uploads, and a smooth user experience.

---

##  Features

###  **Video Upload & Storage**

* Secure video upload system using **Node.js, Express, Multer**
* Local storage management with automatic folder creation
* MongoDB integration for storing video metadata
* CORS-enabled API for frontend–backend communication

###  **Machine Learning Video Popularity Prediction**

* Data preprocessing using **pandas**
* Popularity classification using **RandomForestClassifier**
* Automatic labeling of videos as *popular* or *not popular*
* Accuracy reporting and prediction export

###  **Personalized Content Visibility**

* Recommends videos labeled as *popular*
* Improves user engagement through predictive analytics
* Helps creators understand performance based on past data

---

## Machine Learning — Popularity Prediction

**Tech:** Python, pandas, scikit-learn

The ML pipeline:

1. Load and clean video data (`Date.csv`)
2. Remove missing fields
3. Automatically label a video as **popular** if it has more than **10,000 views**
4. Train a `RandomForestClassifier` based on likes
5. Predict popularity for all videos
6. Output the most popular videos


##  Backend — Video Upload Service

**Tech:** Node.js, Express, Multer, MongoDB, Mongoose

The backend handles:

* Video upload
* Metadata storage
* Server file management
* Database connectivity
* API endpoints for the frontend


