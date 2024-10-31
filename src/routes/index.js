import AuthView from "../views/auth/AuthView";
import Dashboard from "../views/Dashboard";
import LogIn from "../views/auth/LogIn";
import SignUp from "../views/auth/SignUp";
import category from '../components/pages/CategoryPage';
import subcategory from '../components/pages/SubCategoryPage';
import allorders from '../components/pages/AllOrdersPage';
import changepassword from '../components/pages/ChangePasswordPage';
import myprofile from '../components/pages/MyProfilePage';
import packages from '../components/pages/PackagesPage';
import settings from '../components/pages/SettingsPage';
import userpackages from '../components/pages/UserPackagesPage';
import users from '../components/pages/UsersPage';
import language from '../components/pages/PagesOfSettingsPage/LanguagePage';
import smtp from '../components/pages/PagesOfSettingsPage/SMTPPage';
import brand from '../components/pages/PagesOfSettingsPage/BrandManagementPage';
import faq from '../components/pages/PagesOfSettingsPage/FAQ';
import analytics from '../components/pages/PagesOfSettingsPage/GoogleAnalyticsPage';
import how from '../components/pages/PagesOfSettingsPage/HOW';
import gateway from '../components/pages/PagesOfSettingsPage/PaymentGatewayPage';
import showhide from '../components/pages/PagesOfSettingsPage/ShowHidePage';
import testimonials from '../components/pages/PagesOfSettingsPage/TestimonialsPage';
import openai from '../components/pages/PagesOfSettingsPage/OpenAiPage';


let routes = [
    {
        path: "/",
        component: Dashboard,
        layout: "main",
    },
    // {
    //     path: "/dashboard",
    //     component: Dashboard,
    //     layout: "main",
    // },
    {
        path: "/category",
        component: category,
        layout: "main",
    },
    {
        path: "/subcategory",
        component: subcategory,
        layout: "main",
    },
    {
        path: "/allorders",
        component: allorders,
        layout: "main",
    },
    {
        path: "/userpackages",
        component: userpackages,
        layout: "main",
    },
    {
        path: "/packages",
        component: packages,
        layout: "main",
    },
    {
        path: "/settings/basic-setting",
        component: settings,
        layout: "main",
    },
    {
        path: "/users",
        component: users,
        layout: "main",
    },
    {
        path: "/myprofile",
        component: myprofile,
        layout: "main",
    },
    {
        path: "/changepassword",
        component: changepassword,
        layout: "main",
    },
    {
        path: "/login",
        component: LogIn,
        layout: "auth",
    },
    {
        path: "/signup",
        component: SignUp,
        layout: "auth",
    },

    {
        path: "/settings/langauge-setting",
        component: language,
        layout: "main",
    },

    {
        path: "/settings/gateway-setting",
        component: gateway,
        layout: "main",
    },

    {
        path: "/settings/smtp-setting",
        component: smtp,
        layout: "main",
    },

    {
        path: "/settings/openai-setting",
        component: openai,
        layout: "main",
    },

    {
        path: "/settings/google-analytics-setting",
        component: analytics,
        layout: "main",
    },

    {
        path: "/settings/show-hide-setting",
        component: showhide,
        layout: "main",
    },

    {
        path: "/settings/brand-setting",
        component: brand,
        layout: "main",
    },

    {
        path: "/settings/hiw-setting",
        component: how,
        layout: "main",
    },

    {
        path: "/settings/testimonials-setting",
        component: testimonials,
        layout: "main",
    },

    {
        path: "/settings/faq-setting",
        component: faq,
        layout: "main",
    },
];
export default routes;
