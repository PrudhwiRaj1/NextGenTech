angular.module('myApp')
.controller('MainController', ['$scope', function($scope) {
  $scope.company = "NextGenTech";
  $scope.year = new Date().getFullYear();
  $scope.slogan = "Innovate. Inspire. Impact.";
  $scope.tagline = "Empowering your digital journey with creativity & code.";

  $scope.about = "NextGenTech is a forward-thinking technology company committed to driving innovation across industries. We specialize in delivering cutting-edge solutions in cloud computing, artificial intelligence, cybersecurity, IoT, and web & mobile development. Our mission is to empower businesses of all sizes to thrive in the digital age by providing reliable, scalable, and intelligent technology services.\n\nFounded by a team of passionate engineers and visionary leaders, we believe in pushing boundaries and creating tech that not only solves problems but shapes the future. At NextGenTech, we prioritize user experience, data security, and performance — combining creativity with technical expertise.\n\nWhether you're a startup looking to build your first product or an enterprise aiming to digitally transform your operations, we’re your strategic technology partner. We value transparency, agility, and long-term collaboration, and we’re here to help you grow.";

  $scope.testimonials = [
    { name: "Amit S.", feedback: "Truly visionary service, transformed our platform." },
    { name: "Sarah L.", feedback: "Very professional and innovative team!" },
    { name: "Rajeev K.", feedback: "Impressed with their creativity and punctual delivery." }
  ];

  $scope.contact = {};
  $scope.contactSubmitted = false;

  $scope.submitContact = function() {
    if ($scope.contactForm.$valid) {
      $scope.contactSubmitted = true;
    }
  };
    document.title = $scope.company;
    $scope.reasons = [
  { title: "Innovative Solutions", desc: "We bring creative thinking and technical excellence." },
  { title: "Customer Focus", desc: "Your success is our priority at every step." },
  { title: "Reliable Delivery", desc: "Always on-time with high-quality standards." }
];

$scope.team = [
  {
    name: "Priya Mehta",
    role: "CEO",
    photo: "https://photos.peopleimages.com/picture/202303/2628089-happy-smile-and-portrait-of-indian-woman-in-office-for-management-planning-and-data.-research-innovation-and-vision-with-face-of-employee-in-office-for-information-website-and-professional--zoom_90.jpg"
  },
  {
    name: "Anil Kumar",
    role: "CTO",
    photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=200&h=200&crop=faces"
  },
  {
    name: "Meera Jain",
    role: "Lead Designer",
    photo: "https://cdn.create.vista.com/api/media/small/13161087/stock-photo-asian-indian-businesswoman"
  },
  {
    name: "Ravi Singh",
    role: "DevOps Engineer",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&crop=faces"
  }
];


$scope.faqs = [
  { question: "What services do you offer?", answer: "We offer full-stack development, UI/UX design, cloud consulting, and more." },
  { question: "How do I get started?", answer: "Contact us using the form below or email us at hello@nextgentech.com." },
  { question: "What are your pricing models?", answer: "We offer hourly, fixed, and subscription-based models based on project scope." }
];

$scope.subscriber = {};
$scope.subscribe = function() {
  if ($scope.newsletterForm.$valid) {
    $scope.subscriber.submitted = true;
  }
};
$scope.products = [
  {
    name: "AI Assistant Pro",
    description: "An AI-powered productivity assistant for managing daily tasks and reminders efficiently.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Smart Sensor Kit",
    description: "A complete IoT kit for real-time monitoring and automation in smart environments.",
    price: 6999,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
  },
 {
    name: "CloudSync Drive",
    description: "Secure and fast cloud storage solution with smart syncing and sharing options.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "NextGen Robotics",
    description: "A beginner-friendly robotics development platform for future innovators.",
    price: 8499,
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "CyberSecurity Shield",
    description: "Protect your digital life with next-gen antivirus and AI-based threat detection.",
    price: 5999,
    image: "assets/images/cybersecurity_shield.webp"
  },
  {
    name: "Edge Analytics Board",
    description: "Compact hardware for edge-level data processing in real-time environments.",
    price: 7499,
    image: "assets/images/edge_analytics.jpg"
  }

];

}]);
