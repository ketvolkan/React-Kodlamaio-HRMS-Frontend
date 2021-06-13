import React, { useState, useEffect } from 'react'
import { Card, Button,Icon} from 'semantic-ui-react'
import JobAdvertismentService from "../../services/jobAdvertismentService"
import "./JobAds.css"

export default function JobAdvertismentList() {
    const [jobAdvertisments, setJobAdvertisment] = useState([]);
    let jobAdvertismentService = new JobAdvertismentService();
    useEffect(() => {
        jobAdvertismentService.getAllByActivity(false).then(result => setJobAdvertisment(result.data.data))
    }, []);
    function refreshPage() {
        window.location.reload(false);
    }
    return (

        <div>
            <Card.Group>
                {
                    jobAdvertisments.map(jobAdvertisment => (
                        <Card fluid color='red' className="ads">
                           <Card.Content>
                                <Card.Header><Icon name="suitcase" />{jobAdvertisment.employer.company_name}</Card.Header>
                                <Card.Meta><Icon name="envelope" />{jobAdvertisment.employer.mail}</Card.Meta>
                                <Card.Meta><Icon name="phone volume" />{jobAdvertisment.employer.phone_number}</Card.Meta>
                                <Card.Meta><Icon name="address book outline" />{jobAdvertisment.city.cityName}</Card.Meta>
                                <Card.Description>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="yazi"> Açıklama :</div> <div className="aciklama">{jobAdvertisment.description}</div></div></div>
                                </Card.Description>
                                <Card.Description>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="yazi"> Pozisyona Alınacak Eleman Sayısı: </div> <div className="aciklama">{jobAdvertisment.positionCount}</div></div></div>
                                </Card.Description>
                                <Card.Description>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="yazi"> Pozisyon:</div>  <div className="aciklama">{jobAdvertisment.jobPosition.title}</div></div></div>
                                </Card.Description>
                                <Card.Description>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="yazi">  Çalışma Şekli: </div> <div className="aciklama">{jobAdvertisment.wayOfWorking == "online" ? "Uzaktan" : "İş Yerinde"}</div></div></div>
                                </Card.Description>
                                <Card.Description>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-4">
                                            <div className="yazi">  Çalışma Zamanı: </div> <div className="aciklama">{jobAdvertisment.fullOrHalf == "full" ? "Tam Zamanlı" : "Yarı Zamanlı"}</div></div></div>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button
                                    content='Min'
                                    icon='lira sign'
                                    label={{ as: 'a', basic: true, content: `${jobAdvertisment.minSalary > 0 ? jobAdvertisment.minSalary : "Belirlenmemis"}` }}
                                    labelPosition='right'
                                />
                                <Button
                                    content='Max'
                                    icon='lira sign'
                                    label={{ as: 'a', basic: true, pointing: 'right', content: `${jobAdvertisment.maxSalary > 0 ? jobAdvertisment.maxSalary : "Belirlenmemis"}` }}
                                    labelPosition='left'
                                />
                            </Card.Content>
                            <Card.Content>
                                <Button.Group>
                                    <Button positive onClick={() => { jobAdvertismentService.setActivityTrue(jobAdvertisment.id); refreshPage() }}>Onayla</Button>
                                    <Button.Or />
                                    <Button negative onClick={() => { jobAdvertismentService.deleteAds(jobAdvertisment.id); refreshPage() }}>Sil</Button>
                                </Button.Group>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
            <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
        </div>
    )
}
