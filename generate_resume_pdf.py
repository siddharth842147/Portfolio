import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def generate_pdf():
    pdf_path = os.path.join(os.getcwd(), "public", "resume.pdf")
    
    # 0.45 inch margins
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=28,
        bottomMargin=28,
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette
    primary_color = colors.HexColor("#0F172A")    # Deep slate
    secondary_color = colors.HexColor("#0284C7")  # Deep cyan / sky blue
    dark_gray = colors.HexColor("#334155")
    charcoal = colors.HexColor("#1E293B")
    rule_color = colors.HexColor("#CBD5E1")
    
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        alignment=TA_CENTER,
        textColor=primary_color,
    )
    
    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        alignment=TA_CENTER,
        textColor=secondary_color,
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=dark_gray,
    )
    
    section_head_style = ParagraphStyle(
        'ResumeSecHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=primary_color,
        spaceAfter=1,
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.2,
        textColor=charcoal,
        alignment=TA_LEFT,
    )
    
    bold_lead_style = ParagraphStyle(
        'ResumeBoldLead',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.2,
        textColor=charcoal,
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=10.8,
        textColor=charcoal,
        leftIndent=12,
        firstLineIndent=-8,
    )
    
    story = []
    
    # Header
    story.append(Paragraph("<b>SIDDHARTH HM</b>", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Web Developer | React.js | Node.js | MERN Stack", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph(
        "Bangalore, Karnataka, India &nbsp;|&nbsp; +91 9019983348 &nbsp;|&nbsp; "
        "<a href='mailto:siddharth.hm2@gmail.com' color='#0284C7'>siddharth.hm2@gmail.com</a><br/>"
        "<a href='https://linkedin.com/in/siddharthhm-dev' color='#0284C7'>linkedin.com/in/siddharthhm-dev</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/siddharth842147' color='#0284C7'>github.com/siddharth842147</a>",
        contact_style
    ))
    story.append(Spacer(1, 5))
    story.append(HRFlowable(width="100%", thickness=1, color=rule_color, spaceBefore=0, spaceAfter=5))
    
    # Professional Summary
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", section_head_style))
    story.append(Paragraph(
        "Web developer and final-year B.E. Information Science Engineering student (CGPA 8.1/10) with hands-on "
        "experience building responsive, full-stack web applications on the MERN stack. Skilled in React.js front ends, "
        "RESTful APIs with Node.js and Express.js, MongoDB and MySQL databases, JWT authentication, and payment gateway "
        "integration (Razorpay, Stripe). Delivered paid client projects end to end, from requirements to final delivery. "
        "Seeking a Web Developer / Full-Stack Developer role.",
        body_style
    ))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=4))
    
    # Technical Skills
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_head_style))
    skills_data = [
        ("Front End:", "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Reusable Components"),
        ("Back End:", "Node.js, Express.js, RESTful API design, JWT Authentication, Bcrypt, Mongoose, Nodemailer, PDFKit"),
        ("Databases:", "MongoDB, MySQL, Supabase"),
        ("Integrations:", "Razorpay, Stripe, Google Books API"),
        ("Languages:", "JavaScript, Python, Java, C++, SQL"),
        ("Tools:", "Git, GitHub, Postman, VS Code, MySQL Workbench"),
        ("AI-Assisted Dev:", "Claude, Cursor, Codex, Amazon Q Developer (Kiro)")
    ]
    for category, details in skills_data:
        story.append(Paragraph(f"<b>{category}</b> {details}", body_style))
    
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=4))
    
    # Projects
    story.append(Paragraph("<b>PROJECTS</b>", section_head_style))
    
    # Project 1
    story.append(Paragraph("<b>Digital Library Management System</b> | <i>React.js, Node.js, Express.js, MongoDB</i>", bold_lead_style))
    story.append(Paragraph("• Contributed to a full-stack college library platform covering book inventory, borrowing, returns, and QR-based student identification.", bullet_style))
    story.append(Paragraph("• Built secure authentication with JWT and Bcrypt, and integrated Razorpay and Stripe for online fine payments.", bullet_style))
    story.append(Paragraph("• Automated email notifications with Nodemailer and generated downloadable fine receipts using PDFKit.", bullet_style))
    story.append(Paragraph("• Integrated the Google Books API for ISBN-based book lookup; developed REST APIs and reusable React components.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Project 2
    story.append(Paragraph("<b>Kartiva – E-Commerce Website</b> | <i>Next.js, TypeScript, Supabase, Tailwind CSS, shadcn/ui</i>", bold_lead_style))
    story.append(Paragraph("• Built a full-stack e-commerce storefront with product listings across five categories: Books, Clothing, Electronics, Home & Kitchen, and Sports.", bullet_style))
    story.append(Paragraph("• Developed with Next.js, TypeScript, and Supabase, with a responsive UI styled using Tailwind CSS and shadcn/ui components.", bullet_style))
    story.append(Paragraph("• Used AI-assisted development tools (Kiro, Antigravity) to build and polish the application.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Project 3
    story.append(Paragraph("<b>AI Translator Web App</b> | <i>Python, Streamlit, Deep Translator API</i>", bold_lead_style))
    story.append(Paragraph("• Built a responsive web application that translates text across 100+ languages in real time.", bullet_style))
    story.append(Paragraph("• Used Git and GitHub for version control and documented the project for easy setup.", bullet_style))
    
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=4))
    
    # Experience
    story.append(Paragraph("<b>EXPERIENCE</b>", section_head_style))
    
    # Exp 1
    story.append(Paragraph("<b>Freelance Full-Stack Developer</b> | <i>Project-based</i>", bold_lead_style))
    story.append(Paragraph("• Developed and delivered multiple full-stack web projects on a paid basis, handling requirements gathering, implementation, testing, and final delivery.", bullet_style))
    story.append(Paragraph("• Built applications on the MERN stack with REST APIs, database design, and responsive React interfaces.", bullet_style))
    story.append(Paragraph("• Used AI-assisted development tools to speed up coding and debugging while maintaining code quality.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Exp 2
    story.append(Paragraph("<b>AI/ML Intern</b> | <i>Pinnacle Labs (Remote)</i> &nbsp;|&nbsp; <i>Aug 2025 – Sep 2025</i>", bold_lead_style))
    story.append(Paragraph("• Developed an AI-powered language translator web application using Python, Streamlit, and the Deep Translator API.", bullet_style))
    story.append(Paragraph("• Enabled real-time translation across 100+ languages with a minimal-input, responsive user interface.", bullet_style))
    story.append(Paragraph("• Managed source code with Git and GitHub.", bullet_style))
    
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=4))
    
    # Education
    story.append(Paragraph("<b>EDUCATION</b>", section_head_style))
    story.append(Paragraph(
        "<b>Jnana Vikas Institute of Technology</b> – B.E. in Information Science Engineering | 2023 – 2027<br/>"
        "CGPA: 8.1/10 &nbsp;|&nbsp; Coursework: Object-Oriented Programming, Database Management Systems, Data Structures",
        body_style
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph(
        "<b>Sri Vasavi PU College</b> – 12th Standard (PCMC), 87.5% &nbsp;|&nbsp; March 2023",
        body_style
    ))
    
    # Build doc
    doc.build(story)
    print(f"Generated PDF successfully at: {pdf_path}")

if __name__ == "__main__":
    generate_pdf()

