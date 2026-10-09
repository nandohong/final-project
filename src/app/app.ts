
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TelephoneService,
  Telephone,
  TelephoneInput
} from './services/telephone';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  telephones: Telephone[] = [];

  formData: TelephoneInput = this.emptyForm();
  editingId: number | null = null;

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private telephoneService: TelephoneService) {}

  ngOnInit(): void {
    this.loadTelephones();
  }

  emptyForm(): TelephoneInput {
    return {
      namaUser: '',
      alamat: '',
      noTelp: '',
      kodePost: ''
    };
  }

  loadTelephones(): void {
    this.loading = true;
    this.errorMessage = '';

    this.telephoneService.getTelephones().subscribe({
      next: (data) => {
        this.telephones = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage =
          'Gagal mengambil data. Periksa backend dan koneksi database.';
        this.loading = false;
      }
    });
  }

  saveTelephone(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.editingId !== null) {
      const id = this.editingId;
      const existing = this.telephones.find((t) => t.id === id);

      const data: Telephone = {
        id,
        ...this.formData,
        dateTime: existing?.dateTime ?? new Date().toISOString()
      };

      this.telephoneService.updateTelephone(id, data).subscribe({
        next: () => {
          this.successMessage = 'Data berhasil diperbarui.';
          this.resetForm();
          this.loadTelephones();
        },
        error: () => {
          this.errorMessage = 'Gagal memperbarui data.';
        }
      });
    } else {
      this.telephoneService.createTelephone(this.formData).subscribe({
        next: () => {
          this.successMessage = 'Data berhasil ditambahkan.';
          this.resetForm();
          this.loadTelephones();
        },
        error: () => {
          this.errorMessage = 'Gagal menambahkan data.';
        }
      });
    }
  }

  editTelephone(telephone: Telephone): void {
    this.editingId = telephone.id;
    this.formData = {
      namaUser: telephone.namaUser,
      alamat: telephone.alamat,
      noTelp: telephone.noTelp,
      kodePost: telephone.kodePost
    };

    this.successMessage = '';
    this.errorMessage = '';
  }

  deleteTelephone(telephone: Telephone): void {
    const confirmed = window.confirm(
      `Yakin ingin menghapus data ${telephone.namaUser}?`
    );

    if (!confirmed) {
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    this.telephoneService.deleteTelephone(telephone.id).subscribe({
      next: () => {
        this.successMessage = 'Data berhasil dihapus.';
        if (this.editingId === telephone.id) {
          this.resetForm();
        }
        this.loadTelephones();
      },
      error: () => {
        this.errorMessage = 'Gagal menghapus data.';
      }
    });
  }

  resetForm(): void {
    this.formData = this.emptyForm();
    this.editingId = null;
  }
}