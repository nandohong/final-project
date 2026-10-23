
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="dashboard">
      <section class="welcome-banner">
        <div class="welcome-content">
          <div class="welcome-label">
            <span class="welcome-label-dot"></span>
            ADMIN WORKSPACE
          </div>

          <h1>Good to see you,<br /><span>Nando.</span></h1>

          <p>
            Everything you need to manage your telephone records,
            organized in one simple workspace.
          </p>

          <div class="welcome-actions">
            <a routerLink="/telephones" class="primary-link">
              Go to telephone list <span>→</span>
            </a>
            <span class="welcome-note">Your workspace is ready</span>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="hero-ring ring-outer"></div>
          <div class="hero-ring ring-middle"></div>
          <div class="hero-ring ring-inner"></div>
          <div class="hero-center">
            <div class="hero-phone">☎</div>
          </div>
          <div class="floating-card floating-card-top">
            <span class="floating-check">✓</span>
            <span>
              <strong>Workspace</strong>
              <small>Ready to use</small>
            </span>
          </div>
          <div class="floating-card floating-card-bottom">
            <span class="floating-dot"></span>
            <span>
              <strong>Management</strong>
              <small>Simple and organized</small>
            </span>
          </div>
          <div class="hero-leaf leaf-a"></div>
          <div class="hero-leaf leaf-b"></div>
        </div>
      </section>

      <section class="overview-section">
        <div class="section-heading">
          <div>
            <span class="section-eyebrow">YOUR OVERVIEW</span>
            <h2>Workspace at a glance</h2>
            <p>Quick access to your main management areas.</p>
          </div>
          <div class="overview-status">
            <span></span>
            All systems ready
          </div>
        </div>

        <div class="overview-grid">
          <a routerLink="/telephones" class="overview-card telephone-card">
            <div class="overview-card-top">
              <div class="overview-icon">☎</div>
              <span class="overview-arrow">↗</span>
            </div>
            <span class="card-eyebrow">RECORD MANAGEMENT</span>
            <h3>Telephone List</h3>
            <p>Manage telephone records, review entries, and keep data organized.</p>
            <div class="overview-card-bottom">
              <span>Open telephone list</span>
              <span>→</span>
            </div>
          </a>

          <a routerLink="/users" class="overview-card user-card">
            <div class="overview-card-top">
              <div class="overview-icon">♙</div>
              <span class="overview-arrow">↗</span>
            </div>
            <span class="card-eyebrow">ACCOUNT MANAGEMENT</span>
            <h3>User Management</h3>
            <p>Access the user management workspace and current account details.</p>
            <div class="overview-card-bottom">
              <span>Open user list</span>
              <span>→</span>
            </div>
          </a>

          <article class="overview-card system-card">
            <div class="overview-card-top">
              <div class="overview-icon">✓</div>
              <span class="ready-tag"><span></span> READY</span>
            </div>
            <span class="card-eyebrow">WORKSPACE STATUS</span>
            <h3>System Status</h3>
            <p>Your admin portal is ready for day-to-day management tasks.</p>
            <div class="overview-card-bottom">
              <span>Portal status</span>
              <strong>Active</strong>
            </div>
          </article>
        </div>
      </section>

      <section class="lower-grid">
        <article class="content-panel quick-panel">
          <div class="panel-heading">
            <div>
              <span class="section-eyebrow">SHORTCUTS</span>
              <h2>Quick actions</h2>
            </div>
            <span class="panel-mark">↗</span>
          </div>

          <a routerLink="/telephones" class="quick-action">
            <span class="quick-action-icon">＋</span>
            <span class="quick-action-copy">
              <strong>Manage telephone records</strong>
              <small>View, add, update, and delete records</small>
            </span>
            <span class="quick-action-arrow">→</span>
          </a>

          <a routerLink="/users" class="quick-action">
            <span class="quick-action-icon">♙</span>
            <span class="quick-action-copy">
              <strong>View user management</strong>
              <small>Open the account management workspace</small>
            </span>
            <span class="quick-action-arrow">→</span>
          </a>
        </article>

        <article class="content-panel status-panel">
          <div class="panel-heading">
            <div>
              <span class="section-eyebrow">SYSTEM INFORMATION</span>
              <h2>Workspace details</h2>
            </div>
            <div class="status-emblem">✓</div>
          </div>

          <div class="status-list">
            <div class="status-row">
              <span>Portal</span>
              <strong><i></i> Active</strong>
            </div>
            <div class="status-row">
              <span>Navigation</span>
              <strong><i></i> Available</strong>
            </div>
            <div class="status-row">
              <span>Interface</span>
              <strong>Green &amp; White</strong>
            </div>
          </div>

          <div class="status-footnote">
            <span class="footnote-icon">✓</span>
            <p>Your workspace is set up for a clear, organized workflow.</p>
          </div>
        </article>
      </section>

      <div class="dashboard-bottom">
        <span>TELEPHONE MANAGEMENT</span>
        <span>BUILT FOR BETTER WORKFLOWS</span>
      </div>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      color: #153e2b;
    }

    .dashboard {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      padding: 30px;
    }

    .welcome-banner {
      position: relative;
      display: flex;
      min-height: 315px;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      padding: 39px 44px;
      border: 1px solid #c9ebd2;
      border-radius: 21px;
      background: linear-gradient(112deg, #ffffff 0%, #f5fcf6 48%, #e1f7e7 100%);
    }

    .welcome-content {
      position: relative;
      z-index: 3;
      max-width: 570px;
    }

    .welcome-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 11px;
      border: 1px solid #c9ebd2;
      border-radius: 6px;
      background: #ffffff;
      color: #166534;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1.4px;
    }

    .welcome-label-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #22c55e;
    }

    .welcome-content h1 {
      margin: 23px 0 13px;
      color: #123b28;
      font-size: clamp(35px, 4vw, 49px);
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -2px;
    }

    .welcome-content h1 span {
      color: #15803d;
    }

    .welcome-content > p {
      max-width: 445px;
      margin: 0;
      color: #537660;
      font-size: 12px;
      line-height: 1.9;
    }

    .welcome-actions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 17px;
      margin-top: 25px;
    }

    .primary-link {
      display: inline-flex;
      min-height: 43px;
      align-items: center;
      justify-content: center;
      gap: 18px;
      padding: 0 15px;
      border: 1px solid #15803d;
      border-radius: 8px;
      background: #15803d;
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      text-decoration: none;
      transition: background 0.2s ease;
    }

    .primary-link:hover {
      background: #14532d;
    }

    .primary-link span {
      font-size: 16px;
    }

    .welcome-note {
      color: #4c755b;
      font-size: 10px;
    }

    .hero-visual {
      position: absolute;
      top: 0;
      right: 0;
      width: 43%;
      height: 100%;
      min-width: 320px;
    }

    .hero-ring {
      position: absolute;
      top: 50%;
      left: 53%;
      aspect-ratio: 1;
      border: 1px solid #b8e5c5;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .ring-outer {
      width: 310px;
      background: #dcfce7;
      opacity: 0.45;
    }

    .ring-middle {
      width: 245px;
      border-color: #a7dfb7;
      background: #d2f4db;
    }

    .ring-inner {
      width: 180px;
      border-color: #86cf9d;
      background: #baf0c9;
    }

    .hero-center {
      position: absolute;
      top: 50%;
      left: 53%;
      display: grid;
      width: 112px;
      height: 112px;
      place-items: center;
      border: 1px solid #a1dcb1;
      border-radius: 29px;
      background: #ffffff;
      box-shadow: 0 16px 45px #14532d12;
      transform: translate(-50%, -50%) rotate(-7deg);
    }

    .hero-phone {
      color: #166534;
      font-size: 61px;
      transform: rotate(7deg);
    }

    .floating-card {
      position: absolute;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      border: 1px solid #d5ebda;
      border-radius: 10px;
      background: #ffffff;
      box-shadow: 0 12px 35px #14532d10;
    }

    .floating-card strong,
    .floating-card small {
      display: block;
      white-space: nowrap;
    }

    .floating-card strong {
      color: #153e2b;
      font-size: 10px;
    }

    .floating-card small {
      margin-top: 5px;
      color: #5d8068;
      font-size: 9px;
    }

    .floating-card-top {
      top: 53px;
      right: 13px;
    }

    .floating-card-bottom {
      right: 15px;
      bottom: 45px;
    }

    .floating-check {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border-radius: 8px;
      background: #dcfce7;
      color: #166534;
      font-weight: 900;
    }

    .floating-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
    }

    .hero-leaf {
      position: absolute;
      width: 21px;
      height: 43px;
      border-radius: 100% 0 100% 0;
      background: #22c55e;
    }

    .leaf-a {
      top: 30px;
      left: 12%;
      transform: rotate(24deg);
    }

    .leaf-b {
      bottom: 27px;
      left: 16%;
      background: #86efac;
      transform: rotate(-52deg);
    }

    .overview-section {
      margin-top: 36px;
    }

    .section-heading {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 19px;
    }

    .section-eyebrow {
      color: #15803d;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1.7px;
    }

    .section-heading h2,
    .panel-heading h2 {
      margin: 8px 0 0;
      color: #123b28;
      font-size: 21px;
      font-weight: 800;
      letter-spacing: -0.6px;
    }

    .section-heading p {
      margin: 7px 0 0;
      color: #6b8a76;
      font-size: 11px;
      line-height: 1.7;
    }

    .overview-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border: 1px solid #d5ebda;
      border-radius: 7px;
      background: #ffffff;
      color: #166534;
      font-size: 10px;
      font-weight: 750;
      white-space: nowrap;
    }

    .overview-status > span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 17px;
    }

    .overview-card {
      display: flex;
      min-width: 0;
      flex-direction: column;
      padding: 22px;
      border: 1px solid #e0eee3;
      border-radius: 14px;
      background: #ffffff;
      text-decoration: none;
      transition: transform 0.18s ease, border-color 0.18s ease;
    }

    .overview-card:hover {
      transform: translateY(-3px);
      border-color: #9dd9ae;
    }

    .overview-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 23px;
    }

    .overview-icon {
      display: grid;
      width: 45px;
      height: 45px;
      place-items: center;
      border: 1px solid #d5ebda;
      border-radius: 12px;
      background: #f0fdf4;
      color: #166534;
      font-size: 22px;
    }

    .overview-arrow {
      color: #3e8a55;
      font-size: 18px;
    }

    .card-eyebrow {
      color: #4e8660;
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 1.3px;
    }

    .overview-card h3 {
      margin: 9px 0;
      color: #123b28;
      font-size: 16px;
      letter-spacing: -0.3px;
    }

    .overview-card > p {
      min-height: 54px;
      margin: 0;
      color: #6b8a76;
      font-size: 11px;
      line-height: 1.8;
    }

    .overview-card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 20px;
      padding-top: 15px;
      border-top: 1px solid #eaf3ec;
      color: #166534;
      font-size: 10px;
      font-weight: 800;
    }

    .overview-card-bottom strong {
      color: #15803d;
      font-size: 10px;
    }

    .ready-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      border: 1px solid #d5ebda;
      border-radius: 6px;
      background: #f0fdf4;
      color: #166534;
      font-size: 8px;
      font-weight: 900;
      letter-spacing: 0.7px;
    }

    .ready-tag span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #22c55e;
    }

    .lower-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 17px;
      margin-top: 22px;
    }

    .content-panel {
      min-width: 0;
      padding: 23px;
      border: 1px solid #e0eee3;
      border-radius: 14px;
      background: #ffffff;
    }

    .panel-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 20px;
    }

    .panel-heading h2 {
      font-size: 17px;
    }

    .panel-mark {
      color: #3e8a55;
      font-size: 19px;
    }

    .quick-action {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 15px 0;
      border-top: 1px solid #edf5ef;
      text-decoration: none;
    }

    .quick-action-icon {
      display: grid;
      width: 38px;
      height: 38px;
      flex: 0 0 38px;
      place-items: center;
      border: 1px solid #d5ebda;
      border-radius: 10px;
      background: #f0fdf4;
      color: #166534;
      font-size: 19px;
    }

    .quick-action-copy {
      display: flex;
      min-width: 0;
      flex: 1;
      flex-direction: column;
      gap: 5px;
    }

    .quick-action-copy strong {
      color: #153e2b;
      font-size: 11px;
    }

    .quick-action-copy small {
      color: #6b8a76;
      font-size: 10px;
      line-height: 1.6;
    }

    .quick-action-arrow {
      color: #3e8a55;
      font-size: 17px;
    }

    .status-emblem {
      display: grid;
      width: 36px;
      height: 36px;
      place-items: center;
      border: 1px solid #d5ebda;
      border-radius: 11px;
      background: #dcfce7;
      color: #166534;
      font-weight: 900;
    }

    .status-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px 0;
      border-top: 1px solid #edf5ef;
      color: #5d8068;
      font-size: 11px;
    }

    .status-row strong {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: #166534;
      font-size: 10px;
      font-weight: 800;
      text-align: right;
    }

    .status-row strong i {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #22c55e;
    }

    .status-footnote {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-top: 15px;
      padding: 13px;
      border: 1px solid #d5ebda;
      border-radius: 9px;
      background: #f5fcf6;
    }

    .footnote-icon {
      display: grid;
      width: 22px;
      height: 22px;
      flex: 0 0 22px;
      place-items: center;
      border-radius: 7px;
      background: #dcfce7;
      color: #166534;
      font-size: 10px;
      font-weight: 900;
    }

    .status-footnote p {
      margin: 2px 0 0;
      color: #4e755b;
      font-size: 10px;
      line-height: 1.7;
    }

    .dashboard-bottom {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-top: 26px;
      padding: 16px 2px 0;
      border-top: 1px solid #e0eee3;
      color: #779681;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: 1px;
    }

    @media (max-width: 1100px) {
      .dashboard {
        padding: 24px;
      }

      .welcome-banner {
        padding: 32px;
      }

      .hero-visual {
        right: -30px;
        opacity: 0.8;
      }

      .overview-grid {
        gap: 12px;
      }

      .overview-card {
        padding: 17px;
      }
    }

    @media (max-width: 850px) {
      .hero-visual {
        right: -95px;
        opacity: 0.4;
      }

      .welcome-content {
        max-width: 75%;
      }

      .overview-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .lower-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 560px) {
      .dashboard {
        padding: 17px;
      }

      .welcome-banner {
        min-height: 0;
        padding: 26px 22px;
      }

      .welcome-content {
        max-width: 100%;
      }

      .welcome-content h1 {
        font-size: 36px;
      }

      .hero-visual {
        display: none;
      }

      .welcome-actions {
        align-items: flex-start;
        flex-direction: column;
        gap: 12px;
      }

      .section-heading {
        align-items: flex-start;
        flex-direction: column;
      }

      .overview-grid {
        grid-template-columns: 1fr;
      }

      .overview-card > p {
        min-height: 0;
      }

      .content-panel {
        padding: 18px;
      }

      .dashboard-bottom {
        flex-direction: column;
      }
    }
  `]
})
export class Dashboard {}
