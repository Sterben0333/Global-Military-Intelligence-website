// ============================================
// ADMIN PANEL - Global Military Intelligence
// ============================================
const ADMIN_API = '/api/admin';

let adminCurrentSubTab = 'overview';
let adminUsersPage = 1;
let adminReportsPage = 1;
let adminUsersSearch = '';
let adminReportsSearch = '';
let adminReportsFilter = 'all';

// ─── Open / Close ───────────────────────────
function openAdminPanel() {
    // Close dropdown
    const menu = document.getElementById('auth-user-menu');
    if (menu) menu.classList.remove('open');

    // Open the workspace overlay
    openWatchlistDashboard();

    // Switch to admin tab
    setTimeout(() => switchDashboardTab('admin'), 50);
}

// ─── Sub-tab navigation ────────────────────
function switchAdminSubTab(tab) {
    adminCurrentSubTab = tab;
    document.querySelectorAll('.admin-subtab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.subtab === tab);
    });
    document.querySelectorAll('.admin-subtab-content').forEach(pane => {
        pane.classList.remove('active');
    });
    const target = document.getElementById('admin-sub-' + tab);
    if (target) target.classList.add('active');

    if (tab === 'overview') loadAdminStats();
    if (tab === 'users') loadAdminUsers(1);
    if (tab === 'reports') loadAdminReports(1);
}

// ─── Helper: auth header ───────────────────
function adminHeaders() {
    const token = localStorage.getItem('gmi_token');
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };
}

// ─── Helper: escape HTML ───────────────────
function adminEscape(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

// ─── Helper: format date ───────────────────
function adminFormatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function adminRelativeTime(dateStr) {
    if (!dateStr) return 'Never';
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now - d;
    const mins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);

    if (mins < 1) return 'Just now';
    if (mins < 60) return mins + 'm ago';
    if (hours < 24) return hours + 'h ago';
    if (days < 7) return days + 'd ago';
    return adminFormatDate(dateStr);
}


// ============================================
// OVERVIEW — Stats Dashboard
// ============================================
async function loadAdminStats() {
    const grid = document.getElementById('admin-stats-grid');
    if (!grid) return;

    grid.innerHTML = '<div class="admin-loading"><div class="loading-spinner"></div><p>Loading statistics...</p></div>';

    try {
        const res = await fetch(ADMIN_API + '/stats', { headers: adminHeaders() });
        if (!res.ok) throw new Error('Failed to load stats');
        const data = await res.json();

        grid.innerHTML = `
            <div class="admin-stat-card admin-stat-users">
                <div class="admin-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="admin-stat-value">${data.totalUsers}</div>
                <div class="admin-stat-label">Total Users</div>
                <div class="admin-stat-trend">+${data.newUsersThisWeek} this week</div>
            </div>
            <div class="admin-stat-card admin-stat-reports">
                <div class="admin-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <div class="admin-stat-value">${data.totalReports}</div>
                <div class="admin-stat-label">Total Reports</div>
                <div class="admin-stat-trend">+${data.newReportsThisWeek} this week</div>
            </div>
            <div class="admin-stat-card admin-stat-public">
                <div class="admin-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div class="admin-stat-value">${data.publicReports}</div>
                <div class="admin-stat-label">Public Reports</div>
                <div class="admin-stat-sub">${data.privateReports} private</div>
            </div>
            <div class="admin-stat-card admin-stat-watchlist">
                <div class="admin-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div class="admin-stat-value">${data.totalWatchlistItems}</div>
                <div class="admin-stat-label">Watchlist Items</div>
                <div class="admin-stat-sub">across all users</div>
            </div>
            <div class="admin-stat-card admin-stat-admins">
                <div class="admin-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="admin-stat-value">${data.totalAdmins}</div>
                <div class="admin-stat-label">Admins</div>
                <div class="admin-stat-sub">system accounts</div>
            </div>
        `;
    } catch (err) {
        console.error('Admin stats error:', err);
        grid.innerHTML = '<div class="admin-error">Failed to load statistics. Please try again.</div>';
    }
}


// ============================================
// USERS TAB
// ============================================
async function loadAdminUsers(page) {
    adminUsersPage = page || 1;
    const container = document.getElementById('admin-users-container');
    if (!container) return;

    container.innerHTML = '<div class="admin-loading"><div class="loading-spinner"></div><p>Loading users...</p></div>';

    try {
        const params = new URLSearchParams({
            page: adminUsersPage,
            limit: 15,
            search: adminUsersSearch,
            sort: 'newest'
        });

        const res = await fetch(ADMIN_API + '/users?' + params, { headers: adminHeaders() });
        if (!res.ok) throw new Error('Failed to load users');
        const data = await res.json();

        if (data.users.length === 0 && adminUsersPage === 1) {
            container.innerHTML = '<div class="admin-empty">No users found.</div>';
            return;
        }

        let html = `
            <div class="admin-table-wrapper">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Joined</th>
                            <th>Last Active</th>
                            <th>Reports</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        data.users.forEach(u => {
            const initial = (u.displayName || u.username || 'U').charAt(0).toUpperCase();
            html += `
                <tr>
                    <td>
                        <div class="admin-user-cell">
                            <div class="admin-user-avatar">${initial}</div>
                            <div>
                                <div class="admin-user-name">${adminEscape(u.displayName || u.username)}</div>
                                <div class="admin-user-handle">@${adminEscape(u.username)}</div>
                            </div>
                        </div>
                    </td>
                    <td class="admin-td-email">${adminEscape(u.email)}</td>
                    <td>${adminFormatDate(u.createdAt)}</td>
                    <td>${adminRelativeTime(u.lastLogin)}</td>
                    <td><span class="admin-badge">${u.reportCount}</span></td>
                    <td>
                        <button class="admin-action-btn admin-action-delete" onclick="adminDeleteUser('${u._id}', '${adminEscape(u.username)}')" title="Delete user">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </td>
                </tr>
            `;
        });

        html += '</tbody></table></div>';

        // Pagination
        if (data.totalPages > 1) {
            html += '<div class="admin-pagination">';
            html += `<span class="admin-page-info">Page ${data.page} of ${data.totalPages} (${data.total} users)</span>`;
            html += '<div class="admin-page-btns">';
            if (data.page > 1) {
                html += `<button class="admin-page-btn" onclick="loadAdminUsers(${data.page - 1})">← Previous</button>`;
            }
            if (data.page < data.totalPages) {
                html += `<button class="admin-page-btn" onclick="loadAdminUsers(${data.page + 1})">Next →</button>`;
            }
            html += '</div></div>';
        }

        container.innerHTML = html;
    } catch (err) {
        console.error('Admin users error:', err);
        container.innerHTML = '<div class="admin-error">Failed to load users. Please try again.</div>';
    }
}

function adminSearchUsers() {
    const input = document.getElementById('admin-users-search');
    adminUsersSearch = input ? input.value : '';
    loadAdminUsers(1);
}

let adminUsersSearchTimer = null;
function adminSearchUsersDebounced() {
    clearTimeout(adminUsersSearchTimer);
    adminUsersSearchTimer = setTimeout(adminSearchUsers, 400);
}

async function adminDeleteUser(id, username) {
    if (!confirm(`Are you sure you want to delete user "${username}"?\n\nThis will permanently remove:\n• Their account\n• All their reports\n• All their watchlist items\n\nThis action cannot be undone.`)) {
        return;
    }

    try {
        const res = await fetch(ADMIN_API + '/users/' + id, {
            method: 'DELETE',
            headers: adminHeaders()
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || 'Failed to delete user.', 'error');
            return;
        }

        showToast(`User "${username}" deleted (${data.deletedReports} reports, ${data.deletedWatchlist} watchlist items removed).`);
        loadAdminUsers(adminUsersPage);
        loadAdminStats(); // Refresh stats
    } catch (err) {
        console.error('Admin delete user error:', err);
        showToast('Network error. Please try again.', 'error');
    }
}


// ============================================
// REPORTS TAB
// ============================================
async function loadAdminReports(page) {
    adminReportsPage = page || 1;
    const container = document.getElementById('admin-reports-container');
    if (!container) return;

    container.innerHTML = '<div class="admin-loading"><div class="loading-spinner"></div><p>Loading reports...</p></div>';

    try {
        const params = new URLSearchParams({
            page: adminReportsPage,
            limit: 15,
            search: adminReportsSearch,
            filter: adminReportsFilter
        });

        const res = await fetch(ADMIN_API + '/reports?' + params, { headers: adminHeaders() });
        if (!res.ok) throw new Error('Failed to load reports');
        const data = await res.json();

        if (data.reports.length === 0 && adminReportsPage === 1) {
            container.innerHTML = '<div class="admin-empty">No reports found.</div>';
            return;
        }

        let html = `
            <div class="admin-table-wrapper">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Visibility</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        data.reports.forEach(r => {
            const visClass = r.isPublic ? 'admin-vis-public' : 'admin-vis-private';
            const visLabel = r.isPublic ? 'Public' : 'Private';
            html += `
                <tr>
                    <td>
                        <div class="admin-report-cell">
                            <div class="admin-report-title">${adminEscape(r.title)}</div>
                            <div class="admin-report-excerpt">${adminEscape(r.excerpt)}</div>
                        </div>
                    </td>
                    <td class="admin-td-author">${adminEscape(r.author)}</td>
                    <td>
                        <button class="admin-vis-toggle ${visClass}" onclick="adminToggleVisibility('${r._id}')" title="Toggle visibility">
                            <span class="admin-vis-dot"></span>
                            <span>${visLabel}</span>
                        </button>
                    </td>
                    <td>${adminRelativeTime(r.updatedAt)}</td>
                    <td>
                        <button class="admin-action-btn admin-action-delete" onclick="adminDeleteReport('${r._id}', '${adminEscape(r.title).replace(/'/g, "\\'")}')" title="Delete report">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </td>
                </tr>
            `;
        });

        html += '</tbody></table></div>';

        // Pagination
        if (data.totalPages > 1) {
            html += '<div class="admin-pagination">';
            html += `<span class="admin-page-info">Page ${data.page} of ${data.totalPages} (${data.total} reports)</span>`;
            html += '<div class="admin-page-btns">';
            if (data.page > 1) {
                html += `<button class="admin-page-btn" onclick="loadAdminReports(${data.page - 1})">← Previous</button>`;
            }
            if (data.page < data.totalPages) {
                html += `<button class="admin-page-btn" onclick="loadAdminReports(${data.page + 1})">Next →</button>`;
            }
            html += '</div></div>';
        }

        container.innerHTML = html;
    } catch (err) {
        console.error('Admin reports error:', err);
        container.innerHTML = '<div class="admin-error">Failed to load reports. Please try again.</div>';
    }
}

function adminSearchReports() {
    const input = document.getElementById('admin-reports-search');
    adminReportsSearch = input ? input.value : '';
    loadAdminReports(1);
}

let adminReportsSearchTimer = null;
function adminSearchReportsDebounced() {
    clearTimeout(adminReportsSearchTimer);
    adminReportsSearchTimer = setTimeout(adminSearchReports, 400);
}

function adminFilterReports(filter) {
    adminReportsFilter = filter;
    // Update active button
    document.querySelectorAll('.admin-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    loadAdminReports(1);
}

async function adminToggleVisibility(id) {
    try {
        const res = await fetch(ADMIN_API + '/reports/' + id + '/visibility', {
            method: 'PUT',
            headers: adminHeaders()
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || 'Failed to toggle visibility.', 'error');
            return;
        }

        showToast(data.message);
        loadAdminReports(adminReportsPage);
    } catch (err) {
        console.error('Admin toggle visibility error:', err);
        showToast('Network error. Please try again.', 'error');
    }
}

async function adminDeleteReport(id, title) {
    if (!confirm(`Delete report "${title}"?\n\nThis action cannot be undone.`)) {
        return;
    }

    try {
        const res = await fetch(ADMIN_API + '/reports/' + id, {
            method: 'DELETE',
            headers: adminHeaders()
        });
        const data = await res.json();

        if (!res.ok) {
            showToast(data.error || 'Failed to delete report.', 'error');
            return;
        }

        showToast(data.message);
        loadAdminReports(adminReportsPage);
        loadAdminStats();
    } catch (err) {
        console.error('Admin delete report error:', err);
        showToast('Network error. Please try again.', 'error');
    }
}

// ─── Init admin tab on workspace open ──────
function initAdminTab() {
    const user = JSON.parse(localStorage.getItem('gmi_user') || 'null');
    if (!user || user.role !== 'admin') return;
    loadAdminStats();
}
