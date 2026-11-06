import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <a
          href="https://rrv7-countries-app.vercel.app/"
          target="_blank"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/countriesapp.png')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>Countries App</h3>
            <p>
              Discover details about every country around the world - from
              capitals to regions!
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>React Router</span>
              <span>Rest API</span>
              <span>OpenAI</span>
              <span>TailwindCSS</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://ecommerce-react-course-website-ptec.vercel.app/"
          target="_blank"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/ShopHub.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Shop Hub</h3>
            <p>
              ShopHub is a modern e-commerce web application designed to provide
              users with a seamless online shopping experience.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>OpenAI</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://htmlcssdashboard.netlify.app/"
          target="_blank"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/inventory.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Inventory Dashboard</h3>
            <p>
              A web-based inventory management application designed to simplify
              stock monitoring and inventory operations.
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};
