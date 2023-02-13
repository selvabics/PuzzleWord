
About the app
This is a simple offline puzzle word game app. This app has feature such as 
1. Login
2. Puzzle game with different category
3. Leader board
4. Share scores in social media

How to play 
1. Login to the app with your email id
2. Select any category and click Start button
3. Read the question and select the shuffled letters to form the answers
4. If your answer is correct you will get points
5. You can share the scores with your friends in social media
6. Click on Reset button to reset the letters
7. Click next button to play next level of the game
8. Click Back button to go Home Screen and play game in different category
9. Click Leader Board button to go to Leader Board screen where you see your ranking with other players 
10. Try login with multiple email id to play the game and you can see all the players scores in leader board  

Setup the project
1. Make sure you have set up the Node 
2. Make sure you have set up React Native Cli environment. This is not expo project
3. Please check this for more info - https://reactnative.dev/docs/environment-setup
4. Clone the project from the url 

Run Android app
1. cd WordPuzzle
2. npm install
3. npx react-native run-android

Run iOS app
1. cd WordPuzzle
2. npm install
3. cd iOS
4. pod install
5. cd ..
6. npx react-native run-ios


App Store submission

1. Login to your developer account and create an app in iTunes connect with the bundle identifier used for your app. 
2. Fill in all the information required for the app information section
3. Create a distribution certificate and App Store submission profile and register app id in developer account
4. Download and install certificate and profiles 
5. Now open Xcode, and make sure you have all assets in place in size required by Apple
6. Select correct distribution certificate, provisioning profile, team id, bundle identifier
7. Now choose your build target and Any device and archive your app in Xcode through Product -> Archive on the top bar
8. Once that finishes, it should automatically open the Xcode Organizer window (if not, open it through Window -> Organizer)
9. In the Archives tab, select your latest archive and click Upload to App Store... and that'll perform some sanity checks and upload it to iTunes Connect.
10. Now go on iTunes connect and wait for your build that you uploaded to complete processing.
11. Fill all the app information and pricing details.
12. Upload screenshots of your application.
13. Provide demo account credentials if your application requires a login.
14. Submit your app for review.

You can also refer https://developer.apple.com/help/app-store-connect


Play store submission

1. Create keystore file to generate signed APK for production release. Follow the steps in this link: https://reactnative.dev/docs/signed-apk-android
2. Login to your google developer account 
3. Create new application In the menu, go to the ‘All applications’ tab and select ‘Create Application’
4. Choose the application’s default language and enter your application’s title to create new application
5. Fill out all the required details in App Store listing tab
6. Upload the generated signed APK and choose the release type 
7. Select ‘Content Rating’ tab and click continue and confirm. Now you may fill the questionnaire for your app rating. Select the ‘Save Questionnaire’ and then choose the ‘Calculate Rating’ option to see your app rating on the Play Store. The last thing to finalize your app’s content rating is to click on ‘Apply’.
8. Go to the Pricing and Distribution tab in the menu, and then make a choice whether your app is going to be Free or Paid. You may now select the countries you want your app to be released. Additionally, if your application is suited for children under the age of 13, you may select the option of ‘Yes’ for Primary Child-Detected. If otherwise is the case, simply select ‘No’. Similarly, select the options for allowing ads into your application.
9. Go to the ‘App Releases’ tab and then select ‘Manage Production’ followed by ‘Edit Release’. After this, click on ‘Review’ and then choose ‘Start rollout to production’ option. To bring this process to an end select the ‘Confirm’ option. Now you have successfully uploaded the app to the Google Play Store apk account.
10. Once you upload app to google play store, all there is left to do now is to just wait for your application to get approved. It generally took about two hours for your application to get reviewed.

You can also refer https://developer.android.com/studio/publish
