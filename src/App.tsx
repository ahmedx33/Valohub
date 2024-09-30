import { motion } from "framer-motion";
import CommunitySection from "./components/community-section";
import HeroSection from "./components/hero";
import AccountsSection from "./components/accounts";
import { PhasesSection } from "./components/phases";
import LolAccountsSection from "./components/lol-accounts";
import JoinCommunity from "./components/join-community";

function App() {
  return (
    <>
      {/* Hero section (No animation here) */}
      <HeroSection />

      {/* Animated Community Section */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, x: -100 }} // Start from off-screen left
        whileInView={{ opacity: 1, x: 0 }} // Animate into view
        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
        viewport={{ once: true }} // Animate only once
      >
        <CommunitySection />
      </motion.div>

      {/* Join Community Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from below
        whileInView={{ opacity: 1, y: 0 }} // Slide up into view
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }} // Animate only once
      >
        <JoinCommunity />
      </motion.div>

      {/* Accounts Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start from off-screen right
        whileInView={{ opacity: 1, x: 0 }} // Animate into view
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }} // Animate only once
      >
        <AccountsSection />
      </motion.div>

      {/* Phases Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start from off-screen left
        whileInView={{ opacity: 1, x: 0 }} // Animate into view
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }} // Animate only once
      >
        <PhasesSection />
      </motion.div>

      {/* LOL Accounts Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from below
        whileInView={{ opacity: 1, y: 0 }} // Slide up into view
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }} // Animate only once
      >
        <LolAccountsSection />
      </motion.div>
    </>
  );
}

export default App;
