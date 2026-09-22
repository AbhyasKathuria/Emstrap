const { sendCareersMail: sendCareersMailNotification } = require("../utils/mail");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{7,25}$/;

exports.sendCareersMail = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            position,
            resumeLink,
            message
        } = req.body;

        if (!fullName || !email || !phone || !position || !resumeLink) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address."
            });
        }

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number."
            });
        }

        await sendCareersMailNotification({
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            position: position.trim(),
            resumeLink: resumeLink.trim(),
            message: (message || "").trim()
        });

        return res.status(200).json({
            success: true,
            message: "Application submitted successfully."
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Unable to submit application."
        });
    }
};
