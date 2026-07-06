// ============================================
// AUTH SYSTEM - Global Military Intelligence
// ============================================
const AUTH_API = '/api/auth';

// Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '\u2705' : '\u274C'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// Modal Functions
function openLoginModal() {
    const modal = document.getElementById('auth-login-modal');
    if (modal) {
        modal.classList.add('active');
        showRoleSelect();
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('auth-login-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const form = document.getElementById('login-form');
        if (form) form.reset();
    }
}

function openSignupModal() {
    const modal = document.getElementById('auth-signup-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSignupModal() {
    const modal = document.getElementById('auth-signup-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const form = document.getElementById('signup-form');
        if (form) form.reset();
    }
}

function showRoleSelect() {
    const roleSelect = document.getElementById('auth-role-select');
    const loginForm = document.getElementById('auth-login-form');
    if (roleSelect) roleSelect.style.display = '';
    if (loginForm) loginForm.style.display = 'none';
}

function showLoginForm(role) {
    const roleSelect = document.getElementById('auth-role-select');
    const loginForm = document.getElementById('auth-login-form');
    const loginRole = document.getElementById('login-role');
    const loginTitle = document.getElementById('login-form-title');
    const switchText = document.getElementById('login-switch-text');

    if (roleSelect) roleSelect.style.display = 'none';
    if (loginForm) loginForm.style.display = '';
    if (loginRole) loginRole.value = role;
    if (loginTitle) loginTitle.textContent = role === 'admin' ? 'Admin Login' : 'User Login';
    if (switchText) switchText.style.display = role === 'admin' ? 'none' : '';
}

// User Dropdown
function toggleUserDropdown() {
    const menu = document.getElementById('auth-user-menu');
    if (menu) menu.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('auth-user-menu');
    if (menu && !menu.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// Handle Login
async function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById('login-role').value;
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const submitBtn = document.getElementById('login-submit-btn');
    const spinner = submitBtn.querySelector('.auth-btn-spinner');
    const btnText = submitBtn.querySelector('span');

    submitBtn.disabled = true;
    spinner.style.display = '';
    btnText.textContent = 'Logging in...';

    try {
        const res = await fetch(`${AUTH_API}/${role}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || 'Login failed.', 'error');
            return;
        }

        localStorage.setItem('gmi_token', data.token);
        localStorage.setItem('gmi_user', JSON.stringify(data.user));
        updateAuthUI(data.user);
        closeLoginModal();
        showToast(`Welcome back, ${data.user.displayName || data.user.username}!`);
    } catch (err) {
        showToast('Connection error. Is the server running?', 'error');
    } finally {
        submitBtn.disabled = false;
        spinner.style.display = 'none';
        btnText.textContent = 'Login';
    }
}

// Handle Signup
async function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const submitBtn = document.getElementById('signup-submit-btn');
    const spinner = submitBtn.querySelector('.auth-btn-spinner');
    const btnText = submitBtn.querySelector('span');

    submitBtn.disabled = true;
    spinner.style.display = '';
    btnText.textContent = 'Creating account...';

    try {
        const res = await fetch(`${AUTH_API}/user/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || 'Registration failed.', 'error');
            return;
        }

        localStorage.setItem('gmi_token', data.token);
        localStorage.setItem('gmi_user', JSON.stringify(data.user));
        updateAuthUI(data.user);
        closeSignupModal();
        showToast(`Welcome to GMI, ${data.user.username}!`);
    } catch (err) {
        showToast('Connection error. Is the server running?', 'error');
    } finally {
        submitBtn.disabled = false;
        spinner.style.display = 'none';
        btnText.textContent = 'Create Account';
    }
}

// Logout
function logoutUser() {
    localStorage.removeItem('gmi_token');
    localStorage.removeItem('gmi_user');
    updateAuthUI(null);
    const menu = document.getElementById('auth-user-menu');
    if (menu) menu.classList.remove('open');
    showToast('You have been logged out.');
}

// Update header UI based on auth state
function updateAuthUI(user) {
    const guestBtns = document.getElementById('auth-buttons-guest');
    const userMenu = document.getElementById('auth-user-menu');
    const avatar = document.getElementById('auth-avatar');
    const usernameEl = document.getElementById('auth-username');
    const dropdownName = document.getElementById('auth-dropdown-name');
    const dropdownRole = document.getElementById('auth-dropdown-role');

    if (user) {
        if (guestBtns) guestBtns.style.display = 'none';
        if (userMenu) userMenu.style.display = '';
        const initial = (user.displayName || user.username || 'U').charAt(0).toUpperCase();
        if (avatar) avatar.textContent = initial;
        if (usernameEl) usernameEl.textContent = user.displayName || user.username;
        if (dropdownName) dropdownName.textContent = user.displayName || user.username;
        if (dropdownRole) {
            dropdownRole.textContent = user.role === 'admin' ? 'Admin' : 'User';
            dropdownRole.style.background = user.role === 'admin' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(59, 130, 246, 0.15)';
            dropdownRole.style.borderColor = user.role === 'admin' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(59, 130, 246, 0.3)';
            dropdownRole.style.color = user.role === 'admin' ? '#d4af37' : '#3b82f6';
        }
    } else {
        if (guestBtns) guestBtns.style.display = '';
        if (userMenu) userMenu.style.display = 'none';
    }
}

// Profile placeholder
function showProfile() {
    const user = JSON.parse(localStorage.getItem('gmi_user') || 'null');
    if (user) {
        showToast(`Profile: ${user.username} (${user.role})`, 'success');
    }
    const menu = document.getElementById('auth-user-menu');
    if (menu) menu.classList.remove('open');
}

// Restore auth state on page load
function restoreAuthState() {
    const user = JSON.parse(localStorage.getItem('gmi_user') || 'null');
    const token = localStorage.getItem('gmi_token');
    if (user && token) {
        updateAuthUI(user);
    }
}

// Initialize auth on DOM ready
document.addEventListener('DOMContentLoaded', restoreAuthState);
