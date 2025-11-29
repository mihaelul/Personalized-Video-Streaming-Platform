import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

df = pd.read_csv("Date.csv")

print("Verificarea datelor lipsă în fiecare coloană:")
print(df.isnull().sum())
df = df.dropna()

df['Populare'] = df['Vizualizari'].apply(lambda x: 1 if x > 10000 else 0)

print("\nDatele după prelucrare:")
print(df.head())

X = df[['Like-uri']] 
y = df['Populare']  

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"\nAccuratețea modelului: {accuracy_score(y_test, y_pred)}")
df['Predicție_Populare'] = model.predict(X)

videoclipuri_populare = df[df['Predicție_Populare'] == 1]

print(videoclipuri_populare[['Titlu', 'Vizualizari']])
