// ==========================================
// 1. BUTTON COMPONENT
// ==========================================

function createButton({ text, variant = "primary", onClick }) {

    const button = document.createElement("button");

    button.textContent = text;
    button.className = `ui-btn btn-${variant}`;

    if (onClick) {
        button.addEventListener("click", onClick);
    }

    return button;
}


// ==========================================
// 2. CARD COMPONENT
// ==========================================

function createCard({ title, description, buttonText, onClick }) {

    const card = document.createElement("div");
    card.className = "ui-card";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    card.appendChild(heading);
    card.appendChild(paragraph);

    if (buttonText) {

        const button = document.createElement("button");

        button.textContent = buttonText;
        button.className = "card-btn";

        if (onClick) {
            button.addEventListener("click", onClick);
        }

        card.appendChild(button);
    }

    return card;
}


// ==========================================
// 3. MODAL COMPONENT
// ==========================================

function createModal({ title, content }) {

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    const closeButton = document.createElement("button");
    closeButton.className = "close-modal";
    closeButton.textContent = "×";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    closeButton.addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {
            overlay.remove();
        }

    });

    modal.appendChild(closeButton);
    modal.appendChild(heading);
    modal.appendChild(paragraph);

    overlay.appendChild(modal);

    return {
        open() {
            document.getElementById("modalContainer").appendChild(overlay);
        },

        close() {
            overlay.remove();
        }
    };
}


// ==========================================
// 4. TOAST COMPONENT
// ==========================================

function createToast({ message, type = "info", duration = 3000 }) {

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    const container = document.getElementById("toastContainer");

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);
}


// ==========================================
// DEMO: BUTTONS
// ==========================================

const buttonDemo = document.getElementById("buttonDemo");

const primaryButton = createButton({
    text: "Primary Button",
    variant: "primary",
    onClick: () => {
        createToast({
            message: "Primary button clicked!",
            type: "success"
        });
    }
});

const secondaryButton = createButton({
    text: "Secondary Button",
    variant: "secondary",
    onClick: () => {
        createToast({
            message: "Secondary button clicked!",
            type: "info"
        });
    }
});

const successButton = createButton({
    text: "Success",
    variant: "success",
    onClick: () => {
        createToast({
            message: "Success action completed!",
            type: "success"
        });
    }
});

const dangerButton = createButton({
    text: "Delete",
    variant: "danger",
    onClick: () => {
        createToast({
            message: "Delete button clicked!",
            type: "error"
        });
    }
});

buttonDemo.append(
    primaryButton,
    secondaryButton,
    successButton,
    dangerButton
);


// ==========================================
// DEMO: CARDS
// ==========================================

const cardDemo = document.getElementById("cardDemo");

const card1 = createCard({
    title: "Web Development",
    description: "Learn HTML, CSS and JavaScript.",
    buttonText: "Learn More",
    onClick: () => {
        createToast({
            message: "Web Development selected!",
            type: "info"
        });
    }
});

const card2 = createCard({
    title: "Artificial Intelligence",
    description: "Explore machine learning and AI concepts.",
    buttonText: "Explore",
    onClick: () => {
        createToast({
            message: "AI card selected!",
            type: "success"
        });
    }
});

const card3 = createCard({
    title: "UI Design",
    description: "Create clean and modern user interfaces.",
    buttonText: "View",
    onClick: () => {
        createToast({
            message: "UI Design selected!",
            type: "info"
        });
    }
});

cardDemo.append(card1, card2, card3);


// ==========================================
// DEMO: MODAL
// ==========================================

const modal = createModal({
    title: "Welcome!",
    content: "This is a reusable modal component created using vanilla JavaScript."
});

const modalButton = createButton({
    text: "Open Modal",
    variant: "primary",
    onClick: () => {
        modal.open();
    }
});

document.getElementById("modalDemo").appendChild(modalButton);


// ==========================================
// DEMO: TOASTS
// ==========================================

const toastDemo = document.getElementById("toastDemo");

const successToastButton = createButton({
    text: "Success Toast",
    variant: "success",
    onClick: () => {
        createToast({
            message: "Your changes have been saved!",
            type: "success",
            duration: 3000
        });
    }
});

const errorToastButton = createButton({
    text: "Error Toast",
    variant: "danger",
    onClick: () => {
        createToast({
            message: "Something went wrong!",
            type: "error",
            duration: 4000
        });
    }
});

const infoToastButton = createButton({
    text: "Info Toast",
    variant: "primary",
    onClick: () => {
        createToast({
            message: "This is an information message.",
            type: "info",
            duration: 3000
        });
    }
});

toastDemo.append(
    successToastButton,
    errorToastButton,
    infoToastButton
);