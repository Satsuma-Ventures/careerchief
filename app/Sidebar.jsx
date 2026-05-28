/* global React, Logomark, Wordmark, Icons */

function Sidebar({ view, setView }) {
  const NavItem = ({ id, icon: Icon, label, count }) => (
    <button
      className={"app-nav-item" + (view === id ? " active" : "")}
      onClick={() => setView(id)}
    >
      <Icon size={16} />
      <span>{label}</span>
      {count != null && <span className="count">{count}</span>}
    </button>
  );

  return (
    <aside className="app-side">
      <div className="app-side-brand">
        <Lockup height={22} />
      </div>

      <div className="app-side-section">
        <div className="app-side-eyebrow">Workspace</div>
        <NavItem id="brief" icon={Icons.Brief} label="Career brief" />
        <NavItem id="gaps" icon={Icons.Flag} label="Open threads" count="3" />
        <NavItem id="roles" icon={Icons.Briefcase} label="Tailor for roles" count="12" />
        <NavItem id="rehearse" icon={Icons.Mic} label="Rehearse" />
        <NavItem id="linkedin" icon={Icons.Link} label="LinkedIn polish" />
      </div>

      <div className="app-side-section">
        <div className="app-side-eyebrow">Reference</div>
        <NavItem id="history" icon={Icons.Briefcase} label="Work history" />
        <NavItem id="search" icon={Icons.Search} label="Search" />
        <NavItem id="settings" icon={Icons.Settings} label="Settings" />
      </div>

      <div className="app-side-user">
        <div className="app-avatar">AP</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "#1A2F4A" }}>Anna Park</div>
          <div style={{ fontSize: 11, color: "#8AA0B4", marginTop: 1 }}>Senior PM · Free</div>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
