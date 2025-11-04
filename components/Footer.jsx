export default function Footer() {
    return (
        <footer style={{
            textAlign: "center",
            padding: "1.5rem",
            background: "#f9f9f9",
            borderTop: "1px solid #e5e5e5"
        }}>
            <small>© {new Date().getFullYear()} Beckerman Tutoring Services</small>
        </footer>
    );
}
