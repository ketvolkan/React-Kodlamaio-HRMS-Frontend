import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import JobService from '../../services/jobService';
import DatePicker from '../../Components/DatePicker';
import "./JobAdsAdd.css"
import CityService from '../../services/cityService';
import JobAdvertisementService from '../../services/jobAdvertismentService';


export default function JobAdvertismentAdd() {
  let jobAdvertisementService = new JobAdvertisementService;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService.getJob().then(result => setJobs(result.data.data))
  }, []);
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCity().then(result => setCitys(result.data.data))
  }, []);
  const regex = /^[0-9]*$/;
  return (
    <div className="container">
      <h2 className="baslik">İş İlanı Ekleme Formu</h2>
      <Formik
        initialValues={{
          id: 0,
          employer: {
            id: 56
          },
          active: 'false'
          , city: { id: '' }
          , deadline: ''
          , maxSalary: ''
          , description: ''
          , minSalary: ''
          , positionCount: ''
          , jobPosition: {
            id: ''
          }
          , wayOfWorking: ''
          , fullOrHalf: ''
        }}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
          if (
            regex.test(values.maxSalary)
            && regex.test(values.minSalary)
            && regex.test(values.positionCount)
            && values.positionCount != ""
            && values.description != ""
            && values.jobPosition.id != ""
            && values.wayOfWorking != ""
            && values.fullOrHalf != ""
            && values.city.id != ""
            && values.deadline != ""
          ) {
            jobAdvertisementService.addJobAds(values)
            alert("Ekleme Başarılı HRMS Sistem Çalışanı tarafından onaylandıktan sonra listelenecektir!")
          }
          else {
            alert("Hata Girdiğiniz Bilgileri Kontrol Ediniz!");
          }
        }}
      >
        <Form className="form">


          <div className="label">Şehir :</div><Field type="city.id" name="city.id" className="form-control small" component="select">
          <option selected="selected" hidden value=''>Şehir Seçiniz!</option>{
              citys.map(city => (
                <option value={`${city.id}`} >{city.cityName}</option>
              ))}
          </Field>

          <div className="label">İlan Bitiş Zamanı :</div><DatePicker name="deadline"  className='form-control'  />
          <div className="label">Maksimum Maaş :</div>  <Field type="maxSalary" name="maxSalary" className="form-control small" placeholder="   İsteğe Bağlı Örn:10000" />
          <div className="label">Minimum Maaş :</div> <Field type="minSalary" name="minSalary" className="form-control small" placeholder="   İsteğe Bağlı Örn:10000" />
          <div className="label">Açıklama :</div> <Field type="description" name="description" className="form-control large" component="textarea"placeholder="Örn:C# Bilen" />
          <div className="label">Pozisyon Sayısı :</div>  <Field type="positionCount" name="positionCount" className="form-control small" placeholder="Örn:10" />
          <div className="label">Pozisyon :</div>  <Field type="jobPosition.id" name="jobPosition.id" className="form-control small" component="select">
          <option selected disabled hidden value=''>İş Seçiniz!</option>
            {
              jobs.map(job => (
                <option value={`${job.id}`} >{job.title}</option>
              ))}
          </Field>
          <div className="label">Çalışma Şekli :</div>  <Field type="wayOfWorking" name="wayOfWorking" className="form-control small" component="select">
            <option selected disabled hidden value=''> Çalışma Şekli Seçiniz!</option>
            <option value="online">Uzaktan</option>
            <option value="onWorkplace">İşyerinde</option>
          </Field>
          <div className="label">Çalışma Zamanı :</div> <Field type="fullOrHalf" name="fullOrHalf" className="form-control small" component="select">
            <option selected hidden value=''> Çalışma Zamanı Seçiniz!</option>
            <option value="full">Tam Zamanlı</option>
            <option value="half">Yarı Zamanlı</option>
          </Field><br></br> <br></br>
          <button type="submit" className="btn btn-outline-danger buton">Oluştur</button>
        </Form>
      </Formik>
    </div>
  )
}
