import HeaderPage from "../../components/HeaderPage/HeaderPage";
import img1 from "../../assets/images/img1.png";
import "./About.css";



// Худойназар
const About = () => {
    return (
        <div>
            <style>{styles}</style>
            <HeaderPage name={"About"} />

            <div className="about">
                <section className="about__mission">
                    <div className="about__mission-text">
                        <h2>Our Mission</h2>
                        <p>
                            At Comfy, we believe that great furniture transforms a house into a
                            home. Founded with a passion for quality craftsmanship and timeless
                            design, we source and curate pieces that blend comfort with style —
                            from cozy living room sofas to elegant dining sets. Every item in
                            our collection is chosen with care so you can create spaces that
                            truly reflect who you are.
                        </p>
                    </div>
                    <div className="about__mission-img">
                        <img src={img1} alt="Our furniture" />
                    </div>
                </section>

                <section className="about__stats">
                    <div className="about__stat-item">
                        <h3>12+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="about__stat-item">
                        <h3>500+</h3>
                        <p>Products</p>
                    </div>
                    <div className="about__stat-item">
                        <h3>20k+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="about__stat-item">
                        <h3>35+</h3>
                        <p>Countries Shipped</p>
                    </div>
                </section>

                <section className="about__values">
                    <h2>What We Stand For</h2>
                    <div className="about__values-grid">
                        <div className="about__value-card">
                            <div className="about__value-icon">🛋️</div>
                            <h4>Quality First</h4>
                            <p>
                                Every piece is carefully inspected and crafted to meet the
                                highest standards of durability and design.
                            </p>
                        </div>
                        <div className="about__value-card">
                            <div className="about__value-icon">♻️</div>
                            <h4>Sustainability</h4>
                            <p>
                                We are committed to eco-friendly materials and responsible
                                sourcing to protect our planet for future generations.
                            </p>
                        </div>
                        <div className="about__value-card">
                            <div className="about__value-icon">💡</div>
                            <h4>Innovation</h4>
                            <p>
                                We constantly explore new designs and materials to bring you
                                furniture that is both modern and functional.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about__team">
                    <h2>Meet the Team</h2>
                    <div className="about__team-grid">
                        <div className="about__team-card">
                            <div className="about__team-avatar">👨‍💼</div>
                            <div className="about__team-info">
                                <h4>Ahmad Karimov</h4>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                        <div className="about__team-card">
                            <div className="about__team-avatar">👩‍🎨</div>
                            <div className="about__team-info">
                                <h4>Sara Nazarova</h4>
                                <p>Head of Design</p>
                            </div>
                        </div>
                        <div className="about__team-card">
                            <div className="about__team-avatar">👨‍🔧</div>
                            <div className="about__team-info">
                                <h4>Doniyor Toshev</h4>
                                <p>Product Manager</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
