import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LearnMore from '../learn-more.mdx';

function CloudBuildersHeader() {
  const {siteConfig} = useDocusaurusContext();
    return (
    <header class="header-cloud">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <h1>Apache CloudStack– <strong>A Turnkey Solution for Cloud Builders</strong></h1>
                    <p class="px18 my-4 text-center text-lg-start">Decrease total cost of ownership, eliminate vendor lock-in and operational overhead</p>
                    <div class="center-buttons">
                        <a href="#" class="btn btn-primary btn-size mb-5">Download</a>
                    </div>
                </div>
                <div class="col-lg-7"><img src="img/CloudStack_cloud_builderfs_illustration.png" class="img-fluid" alt=""/></div>
            </div>
	</div>
    </header>
    );
}


export default function CloudBuilders() {
  return (
    <Layout title="Apache CloudStack - A Turnkey Solution for Cloud Builders">
        <CloudBuildersHeader/>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 order-lg-2">
                        <h2 class="section-title mb-4">About Apache CloudStack</h2>
                        <p class="px18">Apache CloudStack is a highly
scalable IaaS cloud computing platform that provides a cloud
orchestration layer, automating the creation, provisioning and
configuration of IaaS components. It turns existing virtual
infrastructure into a cloud-based Infrastructure as a Service (IaaS)
platform. Because CloudStack leverages existing infrastructure, the
costs and time for the organization to build a multi-tenant IaaS
platform are greatly reduced.</p>
                        <p class="px18">CloudStack is a turnkey solution
 for MSPs, cloud providers and telcos. It includes the entire “stack” of
 features you need: compute orchestration, Network-as-a-Service, user
and account management, a full and open native API, resource accounting,
 and a first-class User Interface.</p>
                    </div>
                    <div class="col-lg-6 text-center"><img src="img/CloudStack_survey3.png" class="img-fluid mt-4 mt-lg-2" alt="CloudStack survey"/></div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="partners-holder">
                        <p class="blue-title mb-4 mb-lg-5">LEADING COMPANIES TRUST APACHE CLOUDSTACK</p>
                        <div class="partners cloud-partners">
                            <img src="img/BT_logo.svg" height="50" alt=""/>
                            <img src="img/CloudOps_logo.svg" height="30" alt=""/>
                            <img src="img/ikoula_logo.svg" height="40" alt=""/>
                            <img src="img/M5Hosting_logo.png" height="30" alt=""/>
                            <img src="img/versio-logo.png" height="20" alt=""/>
                            <img src="img/yourhosting.nl_logo.svg" height="30" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="powers bg-none">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h2 class="section-title text-center mb-4">CloudStack Solves Key Challenges for Cloud Providers &amp; MSPs</h2>
                        <p class="px18 text-center mb-5">CloudStack can
manage tens of thousands of physical servers installed in geographically
 distributed data centers. It is a powerful IaaS man- agement solution,
but it is still easy to use and implement with a small team. Powered by a
 solid open-source community, Apache CloudStack eliminates the
dependencies and allows you to follow your own cloud development plan,
and use the hardware and software of your choice and business
requirements.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="power-card line">
                            <img src="img/decrease_TCO_icon.svg" alt=""/>
                            <p class="card-title">Decrease TCO for your IaaS</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="power-card line">
                            <img src="img/open-source_icon.svg" alt=""/>
                            <p class="card-title">Completely open-source</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="power-card line">
                            <img src="img/community_icon.svg" alt=""/>
                            <p class="card-title">Powered by an active community</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="power-card">
                            <img src="img/easy_to_use_icon.svg" alt=""/>
                            <p class="card-title">Easy to use</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="power-card">
                            <img src="img/quick_deploy_icon.svg" alt=""/>
                            <p class="card-title">Quick to deploy</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="power-card">
                            <img src="img/vendor_integration_icon.svg" alt=""/>
                            <p class="card-title">Strong vendor integrations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="m80px">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-title text-center mb-5">Learn More about Apache CloudStack</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="apache-card bgd-blue">
                            <div class="img-holder"><img src="img/Apache%20CloudStack%20at%20a%20Glance_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <div class="apache-card-title">Apache CloudStack at a Glance</div>
                                <p>Learn more about Apache CloudStack and the capabilities it provides for IaaS builders</p>
                                <a href="" class="btn btn-primary btn-dark-blue">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="apache-card bgd-dark-blue">
                            <div class="img-holder"><img src="img/Apache%20CloudStack%20Proof%20of%20Concept_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <div class="apache-card-title">Apache CloudStack Proof of Concept Guide</div>
                                <p>This PoC guide gives you all the guidance you need to perform a successful Proof of Concept of Apache CloudStack</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 mb-4">
                        <div class="apache-card card-border">
                            <div class="img-holder"><img src="img/Delivering%20Public%20Cloud%20Services_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <p class="blue-title">SOLUTION BRIEF</p>
                                <div class="apache-card-title">Delivering Public Cloud Services with CloudStack</div>
                                <p>Discover how to use CloudStack to provision public cloud services and improve your profitability</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-4">
                         <div class="apache-card card-border">
                            <div class="img-holder"><img src="img/IKOULA_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body">
                                <p class="blue-title">CASE STUDY</p>
                                <div class="apache-card-title">IKOULA - The cloud leader &amp; innovator in France</div>
                                <p>IKOULA Simplifies the Management of Large-Scale Cloud Infrastructure with CloudStack and XCP-ng</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                         <div class="apache-card card-border">
                            <div class="img-holder"><img src="img/Your.Online_img.png" alt="" width="100%"/></div>
                            <div class="apache-card-body pt-0">
                                <p class="blue-title">CASE STUDY</p>
                                <div class="apache-card-title">Your.Online – A leading European online services platform</div>
                                <p>Future-Proof Open-Source Platform Hosting Millions of Websites for Your.Online Powered by CloudStack, KVM and Ceph</p>
                                <a href="" class="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    </Layout>
			);
			}