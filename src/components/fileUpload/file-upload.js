// // ...existing code...
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './file-upload.css';
import { useLanguage } from '../../contexts/LanguageContext';

export default function FileUpload() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [grievanceId, setGrievanceId] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]); // { file, url, name, size }
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    return () => {
      files.forEach(f => f.url && URL.revokeObjectURL(f.url));
    };
  }, [files]);

  const handleFileChange = (e) => {
    setError('');
    const selected = Array.from(e.target.files).slice(0, 6); // limit
    const mapped = selected.map(f => ({
      file: f,
      url: f.type.startsWith('image/') ? URL.createObjectURL(f) : null,
      name: f.name,
      size: f.size
    }));
    files.forEach(f => f.url && URL.revokeObjectURL(f.url));
    setFiles(mapped);
  };

  const removeFile = (idx) => {
    const copy = [...files];
    const removed = copy.splice(idx, 1)[0];
    if (removed && removed.url) URL.revokeObjectURL(removed.url);
    setFiles(copy);
  };

  const validate = () => {
    if (!fullName.trim()) return 'Full name is required';
    if (!email.trim()) return 'Email is required';
    if (!description.trim()) return 'Description is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (uploading) return;
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError('');
    setUploading(true);
    setProgress(0);
    setSuccessMsg('');

    // simulate progress
    const interval = setInterval(() => {
      setProgress(p => {
        const next = Math.min(p + Math.floor(Math.random() * 20) + 5, 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setUploading(false);
            setSuccessMsg(t.fileUpload.success);
            setFiles([]);
            if (fileInputRef.current) fileInputRef.current.value = '';
            setTimeout(() => navigate('/view-grievances'), 900);
          }, 400);
        }
        return next;
      });
    }, 250);
  };

  return (
    <div className="fileupload-page">
      <div className="fileupload-card">
        <h2 className="fu-title">{t.fileUpload.heading}</h2>

        <form className="fu-form" onSubmit={handleSubmit}>
          {error && <div className="fu-error">{error}</div>}
          {successMsg && <div className="fu-success">{successMsg}</div>}

          <div className="fu-row">
            <label className="fu-label">{t.fileUpload.fullName}</label>
            <input
              className="fu-input"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder={t.fileUpload.fullName}
              required
            />
          </div>

          <div className="fu-row">
            <label className="fu-label">{t.fileUpload.email}</label>
            <input
              className="fu-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.fileUpload.email}
              type="email"
              required
            />
          </div>

          <div className="fu-row">
            <label className="fu-label">{t.fileUpload.grievanceId}</label>
            <input
              className="fu-input"
              value={grievanceId}
              onChange={e => setGrievanceId(e.target.value)}
              placeholder={t.fileUpload.grievanceId}
            />
          </div>

          <div className="fu-row">
            <label className="fu-label">{t.fileUpload.description}</label>
            <textarea
              className="fu-textarea"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={t.fileUpload.description}
              rows={4}
              required
            />
          </div>

          <div className="fu-row">
            <label className="fu-label">{t.fileUpload.attachFiles}</label>
            <input
              ref={fileInputRef}
              className="fu-file"
              type="file"
              accept="image/*,application/pdf"
              multiple
              onChange={handleFileChange}
            />
            <div className="fu-note">{t.fileUpload.note}</div>
          </div>

          {files.length > 0 && (
            <div className="fu-previews">
              {files.map((f, i) => (
                <div key={i} className="fu-preview">
                  {f.url ? (
                    <img src={f.url} alt={f.name} className="fu-thumb" />
                  ) : (
                    <div className="fu-file-icon">PDF</div>
                  )}
                  <div className="fu-file-meta">
                    <div className="fu-fname">{f.name}</div>
                    <div className="fu-fsize">{Math.round(f.size / 1024)} KB</div>
                  </div>
                  <button type="button" className="fu-remove" onClick={() => removeFile(i)}>Remove</button>
                </div>
              ))}
            </div>
          )}

          <div className="fu-actions">
            <button className="fu-submit" type="submit" disabled={uploading}>
              {uploading ? `${t.fileUpload.submitting} ${progress}%` : t.fileUpload.submit}
            </button>
            <button
              type="button"
              className="fu-cancel"
              onClick={() => navigate(-1)}
              disabled={uploading}
            >
              {t.fileUpload.cancel}
            </button>
          </div>

          {uploading && (
            <div className="fu-progress-wrap" aria-hidden={!uploading}>
              <div className="fu-progress" style={{ width: `${progress}%` }} />
              <div className="fu-progress-text">{progress}%</div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
// ...existing code...