"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "products"},
        {
          name: "Team",          id: "team"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Aura Culinary"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars"}}
      title="Elevating the Culinary Art"
      description="Experience our 3D immersive menu where ingredients meet innovation in the heart of the city."
      tag="New 3D Menu Experience"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157791.jpg",          imageAlt: "Restaurant ambiance"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-fruit-salad-wooden-boards_114579-18594.jpg",          imageAlt: "Culinary art dish"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5/5 by our dining community"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="A Legacy of Excellence"
      metrics={[
        {
          icon: Award,
          label: "Years Experience",          value: "25+"},
        {
          icon: Leaf,
          label: "Local Suppliers",          value: "40+"},
        {
          icon: Award,
          label: "Culinary Awards",          value: "12"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Cooking",          description: "Sous-vide perfection combined with traditional roasting techniques for maximum depth.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-interior-design_23-2151821306.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-recipe_23-2148145586.jpg" },
        },
        {
          title: "Curated Wine Pairings",          description: "Our expert sommelier selects the finest vintages to elevate every flavor profile.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/still-life-wine-carafe-table_23-2149631755.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/beverage-topped-with-fried-orange-slice_141793-1125.jpg" },
        },
        {
          title: "Sensory Plating",          description: "A 3D approach to visual food design that delights both the eye and the palate.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-kitchen-interior-design_23-2150976546.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517411.jpg" },
        },
      ]}
      showStepNumbers={true}
      title="Crafted Perfection"
      description="Every detail matters, from locally sourced greens to the final plating, ensuring a sensory 3D experience at every table."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Aged Wagyu Ribeye",          price: "$98",          variant: "Steak",          imageSrc: "http://img.b2bpic.net/free-photo/meat-salad-with-tomatoes-lettuce_140725-6727.jpg"},
        {
          id: "p2",          name: "Truffle Tagliatelle",          price: "$45",          variant: "Pasta",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-red-tomatoes-dark-background-salad-meal-health-food_140725-86105.jpg"},
        {
          id: "p3",          name: "Pan-Seared Scallops",          price: "$52",          variant: "Seafood",          imageSrc: "http://img.b2bpic.net/free-photo/seabass-barramundi-fish-meat-steak_74190-5984.jpg"},
        {
          id: "p4",          name: "Dark Chocolate Dome",          price: "$28",          variant: "Dessert",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cheesecake-with-strawberry-chocolate-plate-newspaper-dark-free-place_140725-105612.jpg"},
        {
          id: "p5",          name: "Garden Harvest Salad",          price: "$32",          variant: "Vegetarian",          imageSrc: "http://img.b2bpic.net/free-photo/spicy-seafood-salad_1203-8916.jpg"},
        {
          id: "p6",          name: "Lobster Bisque",          price: "$38",          variant: "Appetizer",          imageSrc: "http://img.b2bpic.net/free-photo/plate-lentil-soup-glass-champagne_140725-3540.jpg"},
      ]}
      title="Our Signature Dishes"
      description="Discover the art of flavor through our chef's curated seasonal selections."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Eleanor Rigby",          date: "Oct 2024",          title: "Culinary Masterpiece",          quote: "The 3D plating concept is absolutely breathtaking. Simply the best meal I've had all year.",          tag: "Food Critic",          avatarSrc: "http://img.b2bpic.net/free-photo/high-angle-man-eating-fast-food_23-2150347937.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-talking-each-other-lunch-time-restaurant-focus-is-woman-eating-sandwich_637285-1962.jpg"},
        {
          id: "2",          name: "James Thornton",          date: "Sep 2024",          title: "Unmatched Ambiance",          quote: "A truly refined experience. The sommelier recommendations were flawless and perfectly complemented every course.",          tag: "Regular",          avatarSrc: "http://img.b2bpic.net/free-photo/front-view-woman-having-lunch-restaurant_23-2150491815.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-sitting-table_23-2150279929.jpg"},
        {
          id: "3",          name: "Sarah Miller",          date: "Aug 2024",          title: "Perfect Evening",          quote: "We celebrated our anniversary and everything was executed to perfection. Highly recommended for special occasions.",          tag: "Guest",          avatarSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517418.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-couple-clinking-glasses-together-restaurant_53876-42638.jpg"},
        {
          id: "4",          name: "David Wu",          date: "Aug 2024",          title: "Innovation at its best",          quote: "A masterclass in modern dining. Every bite was an exploration of texture and flavor.",          tag: "Blogger",          avatarSrc: "http://img.b2bpic.net/free-photo/good-humoured-caucasian-woman-enjoying-healthy-food-indoor-shot-smiling-girl-eating-salad_197531-17196.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25268.jpg"},
        {
          id: "5",          name: "Maria Lopez",          date: "Jul 2024",          title: "Hidden Gem",          quote: "Finally, a restaurant that understands the balance between style and substance. Truly remarkable.",          tag: "Guest",          avatarSrc: "http://img.b2bpic.net/free-photo/black-american-couple-date-meeting-drink-wine-restaurant_613910-7260.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-restaurant_23-2150520066.jpg"},
      ]}
      title="Voices of Our Guests"
      description="What our patrons say about their fine dining journey with us."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      members={[
        {
          id: "m1",          name: "Chef Alessandro",          role: "Executive Chef",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-kitchen_23-2149631733.jpg"},
        {
          id: "m2",          name: "Elena Rossi",          role: "Sous Chef",          imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-female-chef-smiling-joyfully-while-working-her-kitchen-cutting-grilled-meat-with-scissors_7502-5549.jpg"},
        {
          id: "m3",          name: "Marcus Thorne",          role: "Head Sommelier",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fresh-salad-with-tomatoes-green-chili-pepper-red-onionnd-pomegranate-sauce-white-bowl_140725-11937.jpg"},
      ]}
      title="The Culinary Creators"
      description="Meet the visionary team behind your dining experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do I need a reservation?",          content: "Yes, we highly recommend booking in advance to ensure your preferred dining time."},
        {
          id: "q2",          title: "Is there a dress code?",          content: "Smart-casual attire is preferred to match the elegant atmosphere of our dining room."},
        {
          id: "q3",          title: "Are dietary restrictions accommodated?",          content: "Our kitchen is happy to prepare alternative options for most dietary requirements with prior notice."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Everything you need to know before joining us for a meal."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static"}}
      tag="Stay Connected"
      title="Join our Newsletter"
      description="Receive exclusive updates on seasonal menu changes and private event invitations."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/glass-cup-female-hands-background-sideboard-with-beautiful-vintage-dishes_169016-16049.jpg"
      logoText="Aura Culinary"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Press",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
