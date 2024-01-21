import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { EventLoader } from "./pages/EventsPage";
import EventDetail, { EventDetailLoader } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootPage from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";
import { deleteItemAction } from "./components/EventItem";
import { submitFormAction } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./pages/Newsletter";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
        {
          path: "/events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: EventLoader,
            },
            {
              path: ":eventId",
              id: "eventDetail",
              loader: EventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                  action: deleteItemAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: submitFormAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: submitFormAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
