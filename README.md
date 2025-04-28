# Travel Itinerary App

A modern travel itinerary application built with React that helps users plan and manage their trips. The app features a sleek UI with both light and dark modes, trip details, flight information, hotel bookings, and activity scheduling.

![Travel App Screenshot](/placeholder.svg?height=400&width=800)

## Project Overview

This travel app provides a comprehensive solution for travelers to:
- Plan new trips with destination and duration details
- View upcoming trip information
- Track flight details
- Manage hotel bookings
- Schedule and organize daily activities
- View weather information for destinations
- Access location maps for hotels and activities

The application features multiple screens including an onboarding flow and a detailed trip view with expandable detail panes.

## Project Structure

The project has been refactored to use a standard React structure, removing Next.js dependencies:

```
travel-app/
├── public/                   # Static assets
│   ├── index.html            # HTML entry point
│   └── manifest.json         # Web app manifest
├── src/                      # Source code
│   ├── App.jsx               # Main application component
│   ├── index.jsx             # React entry point
│   ├── components/           # React components
│   │   ├── integrations/     # Third-party integration components
│   │   │   ├── GoogleAuthButton.jsx
│   │   │   ├── MapView.jsx
│   │   │   └── WeatherWidget.jsx
│   │   ├── layout/           # Layout components
│   │   │   ├── StatusBar.jsx
│   │   │   └── BottomNavigation.jsx
│   │   ├── screens/          # Main screen components
│   │   │   ├── DetailPaneScreen.jsx
│   │   │   ├── OnboardingScreen.jsx
│   │   │   └── TripViewScreen.jsx
│   │   └── ui/               # Reusable UI components
│   │       ├── ActivityCalendar.jsx
│   │       ├── ActivityList.jsx
│   │       ├── Button.jsx
│   │       ├── FlightCard.jsx
│   │       ├── HotelList.jsx
│   │       ├── Input.jsx
│   │       ├── Select.jsx
│   │       ├── TravelCompanionSelector.jsx
│   │       ├── TripCard.jsx
│   │       └── UserHeader.jsx
│   ├── contexts/             # React context providers
│   │   ├── AppContext.jsx    # Application state management
│   │   └── ThemeContext.jsx  # Theme management
│   └── styles/               # Stylesheets
│       └── global.css        # Global styles
└── README.md                 # Project documentation
```

## Component Hierarchy

The application follows a hierarchical component structure:

1. **Root Level**
   - `App.jsx` - Main application component that manages screen navigation
   - `ThemeProvider` - Context provider for theme management
   - `AppProvider` - Context provider for global state

2. **Screen Components**
   - `OnboardingScreen` - User onboarding flow with form validation
   - `TripViewScreen` - Main trip dashboard showing trip details, flights, hotels, and activities
   - `DetailPaneScreen` - Expandable detail view for trips, flights, hotels, and activities

3. **Layout Components**
   - `StatusBar` - Mobile status bar display
   - `BottomNavigation` - Navigation tabs for app sections

4. **UI Components**
   - Trip-related: `TripCard`
   - Flight-related: `FlightCard`
   - Hotel-related: `HotelList`
   - Activity-related: `ActivityCalendar`, `ActivityList`
   - Form elements: `Input`, `Select`, `Button`, `TravelCompanionSelector`
   - User interface: `UserHeader`

5. **Integration Components**
   - `GoogleAuthButton` - Authentication with Google
   - `WeatherWidget` - Weather information display
   - `MapView` - Map integration

## State Management

The application uses React Context API for state management:

- `ThemeContext` provides theme state (light/dark) and toggle functionality
- `AppContext` provides global state for:
  - User authentication status
  - Travel preferences (destination, duration, companions)
  - Active navigation tab
  - Trip, flight, hotel, and activity data
  - User data

Local state is used within components for UI-specific state:
- Screen navigation in the main App component
- Detail pane visibility
- Selected items for detailed view
- Form input values and validation

## Development Challenges & Solutions

### 1. Responsive Layout with Detail Pane

**Challenge**: Implementing a responsive layout that could show both the main trip view and a detail pane side-by-side on larger screens, while stacking them on mobile devices.

**Solution**: Used CSS flexbox and media queries to create a responsive layout that adapts to different screen sizes. The detail pane appears side-by-side on desktop and stacks on mobile.

```jsx
<div className="screen-container">
  <div className={`trip-view-container ${showDetailPane ? "with-detail-pane" : ""}`}>
    <TripViewScreen onItemClick={handleItemClick} />
  </div>

  {showDetailPane && (
    <div className="detail-pane-container">
      <DetailPaneScreen
        itemType={selectedItem?.type || "trip"}
        itemId={selectedItem?.id || ""}
        itemData={selectedItem?.data}
        onClose={handleCloseDetailPane}
      />
    </div>
  )}
</div>
